import dayjs from 'dayjs';

export type AuditResultType = {
  auditId: string;
  createdAt: dayjs.Dayjs;
  WPTResultsJsonUrl: string;
  WPTMetricFirstViewTTI: number;
  WPTMetricRepeatViewTTI: number;
  WPTMetricFirstViewSpeedIndex: number;
  WPTMetricRepeatViewSpeedIndex: number;
  WPTMetricFirstViewFirstPaint: number;
  WPTMetricRepeatViewFirstPaint: number;
  WPTMetricFirstViewFirstMeaningfulPaint: number;
  WPTMetricRepeatViewFirstMeaningfulPaint: number;
  WPTMetricFirstViewLoadTime: number;
  WPTMetricRepeatViewLoadTime: number;
  WPTMetricFirstViewFirstContentfulPaint: number;
  WPTMetricRepeatViewFirstContentfulPaint: number;
  WPTMetricFirstViewTimeToFirstByte: number;
  WPTMetricRepeatViewTimeToFirstByte: number;
  WPTMetricLighthousePerformance: number;
};

export type ApiAuditResultType = {
  audit: {
    uuid: string;
    page: string;
  };
  created_at: string;
  wpt_results_json_url: string;
  wpt_metric_first_view_tti: number;
  wpt_metric_repeat_view_tti: number;
  wpt_metric_first_view_speed_index: number;
  wpt_metric_repeat_view_speed_index: number;
  wpt_metric_first_view_first_paint: number;
  wpt_metric_repeat_view_first_paint: number;
  wpt_metric_first_view_first_meaningful_paint: number;
  wpt_metric_repeat_view_first_meaningful_paint: number;
  wpt_metric_first_view_load_time: number;
  wpt_metric_repeat_view_load_time: number;
  wpt_metric_first_view_first_contentful_paint: number;
  wpt_metric_repeat_view_first_contentful_paint: number;
  wpt_metric_first_view_time_to_first_byte: number;
  wpt_metric_repeat_view_time_to_first_byte: number;
  wpt_metric_lighthouse_performance: number;
};
