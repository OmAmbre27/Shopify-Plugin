import "@shopify/ui-extensions/preact";
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {i18n} = shopify;
  
  return (
    <s-page heading='POS action'>
      <s-scroll-box>
        <s-box padding="small">
          <s-text>{i18n.translate('welcome', {flavor: 'preact'})}</s-text>
        </s-box>
      </s-scroll-box>
    </s-page>
  );
}