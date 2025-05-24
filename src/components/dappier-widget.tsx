'use client';

import dynamic from 'next/dynamic';

const DappierWidgetContent = () => {
  return (
    <div id="dappier-ask-ai-widget">
      <dappier-ask-ai-widget 
        widgetId="wd_01jw1saj4gf0dszz8p34tmm20p" 
      />
    </div>
  );
};

// Disable SSR for this component
const DappierWidget = dynamic(() => Promise.resolve(DappierWidgetContent), {
  ssr: false,
});

export default DappierWidget; 