import React from "react";
const TrustBox = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
    <div
      ref={ref}
      class="trustpilot-widget"
      data-locale="en-US"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id="644519ecd14e654a02b09436"
      data-style-height="50px"
      data-style-width="100%"
      data-theme="dark"
      data-min-review-count="10"
      data-without-reviews-preferred-string-id="1"
      data-style-alignment="center"
      className="trustpilot-widget"
    >
      <a
        href="https://www.trustpilot.com/review/baitalanaqah"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
};
export default TrustBox;
