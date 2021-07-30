import { useEffect, memo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { scrollTo, getScrollPage } from './utils';

export const DefaultKey = 'init-enter';

interface IProps {
  visitedUrl: Map<string, number>;
  node?: HTMLElement;
}

function ScrollRestoration({
  history,
  visitedUrl,
  node
}: RouteComponentProps & IProps) {
  const handlePopStateChange = () => {
    const { location } = history;
    const { key } = location;
    const existingRecord = visitedUrl.get(key || DefaultKey);

    if (existingRecord !== undefined) {
      scrollTo(node, existingRecord);
    }
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopStateChange);
    return () => {
      window.removeEventListener('popstate', handlePopStateChange);
    };
  }, []);

  return null;
}

export default withRouter(
  memo(ScrollRestoration, (prevProps, nextProps) => {
    const { location: prevLoaction, visitedUrl, history } = prevProps;
    const { location: nextLoaction, node } = nextProps;

    const key = prevLoaction.key || DefaultKey;

    const locationChanged =
      (nextLoaction.pathname !== prevLoaction.pathname ||
        nextLoaction.search !== prevLoaction.search) &&
      nextLoaction.hash === '';

    const scroll = getScrollPage(node);

    if (locationChanged) {
      if (history.action !== 'POP') {
        scrollTo(node, 0);
        visitedUrl.set(key, scroll);
      } else {
        visitedUrl.set(key, scroll);
      }
    }

    return false;
  })
);
