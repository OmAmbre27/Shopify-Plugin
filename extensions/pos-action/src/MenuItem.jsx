import "@shopify/ui-extensions/preact";
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-button onClick={() => shopify.action.presentModal()} />
  );
}