// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  {
    category,
    label,
    value,
  }: {
    category: string;
    label?: string;
    value?: number;
  }
) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
