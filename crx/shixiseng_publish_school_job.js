const EDUCATION_MAP = {
  "\u535A\u58EB": "\u535A\u58EB",
  "\u7855\u58EB": "\u7855\u58EB",
  "\u672C\u79D1": "\u672C\u79D1",
  "\u4E13\u79D1": "\u4E0D\u9650",
  "\u9AD8\u4E2D": "\u4E0D\u9650",
  "\u4E2D\u4E13\u4E2D\u6280": "\u4E0D\u9650",
  "\u4E2D\u4E13/\u4E2D\u6280": "\u4E0D\u9650",
  "\u521D\u4E2D\u53CA\u4EE5\u4E0B": "\u4E0D\u9650",
  "\u4E0D\u9650": "\u4E0D\u9650"
};
const JOB_CATEGORIES_MAP = {
  "\u573A\u52A1/\u5267\u52A1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u5F71\u89C6\u4F20\u5A92", "\u5F71\u89C6\u4F20\u5A92"],
  "\u6F14\u827A\u4EBA\u5458/\u7ECF\u7EAA\u4EBA": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u5F71\u89C6\u4F20\u5A92", "\u7ECF\u7EAA\u4EBA"],
  "\u5F71\u89C6\u5236\u4F5C": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u5F71\u89C6\u4F20\u5A92", "\u540E\u671F\u5236\u4F5C"],
  "\u821E\u7F8E\u8BBE\u8BA1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u5F71\u89C6\u4F20\u5A92", "\u540E\u671F\u5236\u4F5C"],
  "\u5E7F\u544A": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u5E7F\u544A", "\u5E7F\u544A"],
  "IT\u57F9\u8BAD": ["\u6559\u80B2\u57F9\u8BAD", "\u804C\u4E1A\u57F9\u8BAD", "\u62D3\u5C55\u57F9\u8BAD"],
  "\u624D\u827A\u7279\u957F\u57F9\u8BAD": ["\u6559\u80B2\u57F9\u8BAD", "\u7279\u957F\u57F9\u8BAD", "\u7279\u957F\u57F9\u8BAD"],
  "\u6559\u52A1\u7BA1\u7406": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u52A1\u884C\u653F", "\u6559\u52A1\u884C\u653F"],
  "\u8003\u7814\u8F85\u5BFC": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u7559\u5B66\u8F85\u5BFC": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u7279\u6B8A\u6559\u80B2": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u8BED\u8A00\u57F9\u8BAD": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u65E9\u6559/\u5E7C\u6559": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5E7C\u6559"],
  "\u804C\u4E1A\u57F9\u8BAD": ["\u6559\u80B2\u57F9\u8BAD", "\u804C\u4E1A\u57F9\u8BAD", "\u62D3\u5C55\u57F9\u8BAD"],
  "\u4E2D\u5C0F\u5B66\u8BFE\u7A0B\u8F85\u5BFC": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u9AD8\u7B49\u6559\u80B2": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u79D1\u7814/\u5B66\u672F\u7814\u7A76": ["\u6559\u80B2\u57F9\u8BAD", "\u6559\u5E08", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u4FDD\u9669": ["\u91D1\u878D/\u6CD5\u52A1", "\u4FDD\u9669", "\u4FDD\u9669"],
  "\u6295\u878D\u8D44": ["\u91D1\u878D/\u6CD5\u52A1", "\u6295\u878D\u8D44", "\u6295\u878D\u8D44"],
  "\u8BC1\u5238/\u57FA\u91D1/\u671F\u8D27": ["\u91D1\u878D/\u6CD5\u52A1", "\u8BC1\u5238/\u57FA\u91D1/\u671F\u8D27", "\u8BC1\u5238/\u57FA\u91D1/\u671F\u8D27\u57FA\u91D1\u7ECF\u7406"],
  "\u4FE1\u6258/\u62C5\u4FDD/\u62CD\u5356/\u5178\u5F53": ["\u91D1\u878D/\u6CD5\u52A1", "\u8BC1\u5238/\u57FA\u91D1/\u671F\u8D27", "\u8BC1\u5238/\u57FA\u91D1/\u671F\u8D27\u57FA\u91D1\u7ECF\u7406"],
  "\u94F6\u884C\u53CA\u91D1\u878D\u670D\u52A1": ["\u91D1\u878D/\u6CD5\u52A1", "\u94F6\u884C", "\u94F6\u884C"],
  "\u519C/\u6797/\u7267/\u6E14": ["\u73AF\u5883/\u8D44\u6E90\u5229\u7528", "\u519C\u7267\u6E14\u6797", "\u519C\u7267\u6E14\u6797"],
  "\u73AF\u5883\u79D1\u5B66/\u73AF\u4FDD": ["\u73AF\u5883/\u8D44\u6E90\u5229\u7528", "\u73AF\u5883\u79D1\u5B66", "\u73AF\u5883\u79D1\u5B66"],
  "\u80FD\u6E90/\u77FF\u4EA7/\u5730\u8D28": ["\u73AF\u5883/\u8D44\u6E90\u5229\u7528", "\u80FD\u6E90/\u77FF\u4EA7/\u5730\u8D28", "\u80FD\u6E90/\u77FF\u4EA7/\u5730\u8D28"],
  "\u9648\u5217\u5C55\u793A\u8BBE\u8BA1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u975E\u89C6\u89C9\u8BBE\u8BA1", "\u9648\u5217\u8BBE\u8BA1"],
  "\u52A8\u753B\u52A8\u6548\u8BBE\u8BA1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u89C6\u89C9/\u4EA4\u4E92\u8BBE\u8BA1", "\u52A8\u753B\u8BBE\u8BA1"],
  "\u5DE5\u4E1A\u8BBE\u8BA1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u975E\u89C6\u89C9\u8BBE\u8BA1", "\u5DE5\u4E1A\u8BBE\u8BA1"],
  "\u89C6\u89C9/\u4EA4\u4E92\u8BBE\u8BA1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u89C6\u89C9/\u4EA4\u4E92\u8BBE\u8BA1", "\u89C6\u89C9/\u4EA4\u4E92\u8BBE\u8BA1"],
  "\u4EA7\u54C1\u7ECF\u7406": ["\u4E92\u8054\u7F51IT", "\u4EA7\u54C1", "\u4EA7\u54C1\u7ECF\u7406"],
  "\u9AD8\u7EA7\u7BA1\u7406": ["\u4E92\u8054\u7F51IT", "\u6280\u672F\u7BA1\u7406", "\u6280\u672F\u7BA1\u7406"],
  "\u9879\u76EE\u7BA1\u7406": ["\u4E92\u8054\u7F51IT", "\u4EA7\u54C1", "\u4EA7\u54C1\u9879\u76EE\u7BA1\u7406"],
  "\u7B56\u5212": ["\u8D38\u6613\u5546\u52A1", "\u5E02\u573A/\u8425\u9500", "\u5E02\u573A\u7B56\u5212"],
  "\u53D1\u884C": ["\u8D38\u6613\u5546\u52A1", "\u5E02\u573A/\u8425\u9500", "\u5E02\u573A/\u8425\u9500"],
  "\u516C\u5173\u5A92\u4ECB": ["\u8D38\u6613\u5546\u52A1", "\u516C\u5173\u5A92\u4ECB", "\u516C\u5173\u5A92\u4ECB"],
  "\u4F1A\u5C55\u4F1A\u52A1": ["\u8D38\u6613\u5546\u52A1", "\u4F1A\u52A1\u4F1A\u5C55", "\u4F1A\u52A1\u4F1A\u5C55"],
  "\u5E02\u573A/\u54C1\u724C\u63A8\u5E7F": ["\u8D38\u6613\u5546\u52A1", "\u54C1\u724C\u63A8\u5E7F", "\u54C1\u724C\u63A8\u5E7F"],
  "\u5E02\u573A\u8C03\u7814": ["\u8D38\u6613\u5546\u52A1", "\u5E02\u573A/\u8425\u9500", "\u5E02\u573A/\u8425\u9500"],
  "\u91C7\u8D2D/\u4F9B\u5E94\u94FE/\u6750\u6599\u7BA1\u7406": ["\u8D38\u6613\u5546\u52A1", "\u91C7\u8D2D", "\u91C7\u8D2D"],
  "\u4ED3\u50A8\u7BA1\u7406": ["\u8D38\u6613\u5546\u52A1", "\u4F9B\u5E94\u94FE/\u7269\u6D41", "\u4ED3\u50A8\u7ECF\u7406"],
  "\u4EA4\u901A\u8FD0\u8F93": ["\u8D38\u6613\u5546\u52A1", "\u4F9B\u5E94\u94FE/\u7269\u6D41", "\u4F9B\u5E94\u94FE/\u7269\u6D41"],
  "\u914D\u9001\u7406\u8D27": ["\u8D38\u6613\u5546\u52A1", "\u4F9B\u5E94\u94FE/\u7269\u6D41", "\u4F9B\u5E94\u94FE/\u7269\u6D41"],
  "\u7269\u6D41\u7BA1\u7406": ["\u8D38\u6613\u5546\u52A1", "\u4F9B\u5E94\u94FE/\u7269\u6D41", "\u4F9B\u5E94\u94FE/\u7269\u6D41"],
  "\u5173\u52A1": ["\u8D38\u6613\u5546\u52A1", "\u8FDB\u51FA\u53E3\u8D38\u6613", "\u62A5\u5173/\u62A5\u68C0\u5458"],
  "\u8D22\u52A1": ["\u4EBA\u4E8B\u884C\u653F\u8D22\u52A1", "\u8D22\u4F1A", "\u8D22\u4F1A"],
  "\u6863\u6848\u7BA1\u7406": ["\u4EBA\u4E8B\u884C\u653F\u8D22\u52A1", "\u884C\u653F", "\u884C\u653F"],
  "\u884C\u653F": ["\u4EBA\u4E8B\u884C\u653F\u8D22\u52A1", "\u884C\u653F", "\u884C\u653F"],
  "\u5408\u89C4\u98CE\u63A7/\u6CD5\u52A1/\u5F8B\u5E08": ["\u91D1\u878D/\u6CD5\u52A1", "\u6CD5\u52A1", "\u6CD5\u52A1"],
  "\u4EBA\u4E8B": ["\u4EBA\u4E8B\u884C\u653F\u8D22\u52A1", "\u4EBA\u529B\u8D44\u6E90", "\u4EBA\u529B\u8D44\u6E90"],
  "\u6587\u5458/\u52A9\u7406": ["\u4EBA\u4E8B\u884C\u653F\u8D22\u52A1", "\u884C\u653F", "\u884C\u653F"],
  "\u9500\u552E\u987E\u95EE": ["\u8D38\u6613\u5546\u52A1", "\u9500\u552E", "\u9500\u552E"],
  "\u5546\u52A1\u62D3\u5C55": ["\u8D38\u6613\u5546\u52A1", "\u9500\u552E", "\u9500\u552E"],
  "\u9500\u552E\u7BA1\u7406": ["\u8D38\u6613\u5546\u52A1", "\u9500\u552E", "\u9500\u552E"],
  "\u6D4B\u8BD5\u5DE5\u7A0B\u5E08": ["\u4E92\u8054\u7F51IT", "\u6D4B\u8BD5", "\u6D4B\u8BD5"],
  "\u8FD0\u7EF4\u652F\u6301": ["\u4E92\u8054\u7F51IT", "\u8FD0\u7EF4/\u6280\u672F\u652F\u6301", "\u8FD0\u7EF4/\u6280\u672F\u652F\u6301"],
  "\u552E\u524D\u552E\u540E\u5DE5\u7A0B\u5E08": ["\u4E92\u8054\u7F51IT", "\u8FD0\u7EF4/\u6280\u672F\u652F\u6301", "\u8FD0\u7EF4/\u6280\u672F\u652F\u6301"],
  "\u7269\u4E1A/\u5B89\u4FDD": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u9910\u996E\u670D\u52A1": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u9152\u5E97\u670D\u52A1": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u65C5\u6E38\u670D\u52A1": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u5065\u5EB7/\u7F8E\u5BB9": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u5BB6\u653F/\u7EF4\u4FEE": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u4E13\u4E1A\u670D\u52A1": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u5546\u52A1\u670D\u52A1": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u8FD0\u52A8\u5065\u8EAB": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u96F6\u552E\u767E\u8D27": ["\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A", "\u670D\u52A1\u4E1A"],
  "\u7BA1\u57F9\u751F/\u50A8\u5907\u5E72\u90E8": ["\u975E\u76C8\u5229/\u5176\u4ED6", "\u7BA1\u57F9\u751F", "\u7BA1\u57F9\u751F"],
  "\u793E\u5DE5": ["\u975E\u76C8\u5229/\u5176\u4ED6", "\u516C\u5171\u4E8B\u4E1A", "\u793E\u5DE5"],
  "\u653F\u5E9C\u53CA\u975E\u76C8\u5229\u673A\u6784\u4ECE\u4E1A\u8005": ["\u975E\u76C8\u5229/\u5176\u4ED6", "\u516C\u5171\u4E8B\u4E1A", "\u5FD7\u613F\u8005"],
  "\u7535\u5546\u8FD0\u8425": ["\u4E92\u8054\u7F51IT", "\u8FD0\u8425", "\u7535\u5546\u8FD0\u8425"],
  "\u65B0\u5A92\u4F53\u8FD0\u8425": ["\u4E92\u8054\u7F51IT", "\u8FD0\u8425", "\u65B0\u5A92\u4F53\u8FD0\u8425"],
  "\u4E1A\u52A1\u8FD0\u8425": ["\u4E92\u8054\u7F51IT", "\u8FD0\u8425", "\u4EA7\u54C1\u8FD0\u8425"],
  "\u8FD0\u8425\u7BA1\u7406": ["\u4E92\u8054\u7F51IT", "\u8FD0\u8425", "\u8FD0\u8425"],
  "\u4E13\u4E1A\u5206\u6790": ["\u4E92\u8054\u7F51IT", "\u8FD0\u8425", "\u8FD0\u8425"],
  "\u5BA2\u6237\u670D\u52A1": ["\u4E92\u8054\u7F51IT", "\u8FD0\u8425", "\u7528\u6237\u8FD0\u8425"],
  "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020": ["\u751F\u4EA7\u5236\u9020", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020"],
  "\u673A\u68B0\u8BBE\u5907\u7EF4\u4FEE": ["\u751F\u4EA7\u5236\u9020", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020"],
  "\u6C7D\u8F66\u5236\u9020": ["\u751F\u4EA7\u5236\u9020", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020"],
  "\u6C7D\u8F66\u9500\u552E\u4E0E\u670D\u52A1": ["\u8D38\u6613\u5546\u52A1", "\u9500\u552E", "\u9500\u552E"],
  "\u666E\u5DE5/\u6280\u5DE5": ["\u751F\u4EA7\u5236\u9020", "\u751F\u4EA7\u8425\u8FD0", "\u751F\u4EA7\u5458"],
  "\u751F\u4EA7\u7BA1\u7406": ["\u751F\u4EA7\u5236\u9020", "\u751F\u4EA7\u8425\u8FD0", "\u751F\u4EA7\u5458"],
  "\u751F\u4EA7\u8D28\u91CF\u7BA1\u7406": ["\u751F\u4EA7\u5236\u9020", "\u751F\u4EA7\u8425\u8FD0", "\u751F\u4EA7\u5458"],
  "\u670D\u88C5/\u7EBA\u7EC7/\u76AE\u9769": ["\u751F\u4EA7\u5236\u9020", "\u751F\u4EA7\u8425\u8FD0", "\u751F\u4EA7\u5458"],
  "\u5370\u5237\u5305\u88C5": ["\u751F\u4EA7\u5236\u9020", "\u751F\u4EA7\u8425\u8FD0", "\u751F\u4EA7\u5458"],
  "\u5316\u5DE5": ["\u751F\u4EA7\u5236\u9020", "\u751F\u4EA7\u8425\u8FD0", "\u751F\u4EA7\u5458"],
  "\u7F16\u8F91/\u7F16\u6821/\u4F5C\u5BB6": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u91C7\u7F16/\u5199\u4F5C/\u51FA\u7248", "\u91C7\u7F16/\u5199\u4F5C/\u51FA\u7248"],
  "\u7FFB\u8BD1": ["\u6559\u80B2\u57F9\u8BAD", "\u7FFB\u8BD1", "\u7FFB\u8BD1"],
  "\u8BB0\u8005/\u91C7\u7F16": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u91C7\u7F16/\u5199\u4F5C/\u51FA\u7248", "\u91C7\u7F16/\u5199\u4F5C/\u51FA\u7248"],
  "\u751F\u7269/\u533B\u836F": ["\u751F\u7269\u533B\u7597", "\u751F\u7269\u5236\u836F", "\u751F\u7269\u5236\u836F"],
  "\u533B\u7597\u5668\u68B0": ["\u751F\u7269\u533B\u7597", "\u751F\u7269\u5236\u836F", "\u751F\u7269\u5236\u836F"],
  "\u62A4\u58EB/\u533B\u52A9": ["\u751F\u7269\u533B\u7597", "\u62A4\u58EB/\u62A4\u7406", "\u62A4\u58EB/\u62A4\u7406"],
  "\u533B\u751F/\u836F\u5242\u5E08": ["\u751F\u7269\u533B\u7597", "\u533B\u751F/\u533B\u6280", "\u533B\u751F/\u533B\u6280"],
  "\u533B\u52A1\u7BA1\u7406": ["\u751F\u7269\u533B\u7597", "\u533B\u751F/\u533B\u6280", "\u533B\u751F/\u533B\u6280"],
  "\u836F\u5E97": ["\u751F\u7269\u533B\u7597", "\u836F\u5E97", "\u836F\u5E97"],
  "\u524D\u7AEF\u5F00\u53D1": ["\u4E92\u8054\u7F51IT", "\u524D\u7AEF\u5F00\u53D1", "\u524D\u7AEF\u5F00\u53D1"],
  "\u4EBA\u5DE5\u667A\u80FD": ["\u4E92\u8054\u7F51IT", "\u4EBA\u5DE5\u667A\u80FD", "\u4EBA\u5DE5\u667A\u80FD"],
  "\u8F6F\u4EF6\u7814\u53D1": ["\u4E92\u8054\u7F51IT", "\u524D\u7AEF\u5F00\u53D1", "\u524D\u7AEF\u5F00\u53D1"],
  "\u6570\u636E\u5DE5\u7A0B\u5E08": ["\u4E92\u8054\u7F51IT", "\u6570\u636E", "\u6570\u636E\u5206\u6790\u5E08"],
  "\u79FB\u52A8\u7814\u53D1": ["\u4E92\u8054\u7F51IT", "\u79FB\u52A8\u5F00\u53D1", "\u79FB\u52A8\u5F00\u53D1"],
  "\u901A\u4FE1\u53CA\u786C\u4EF6\u7814\u53D1": ["\u901A\u4FE1/\u786C\u4EF6", "\u786C\u4EF6\u5F00\u53D1", "\u786C\u4EF6\u5F00\u53D1"],
  "\u7535\u5B50/\u7535\u5668/\u534A\u5BFC\u4F53": ["\u901A\u4FE1/\u786C\u4EF6", "\u7535\u5B50/\u534A\u5BFC\u4F53", "\u7535\u5B50/\u534A\u5BFC\u4F53"],
  "\u5DE5\u7A0B\u5B89\u5168/\u5DE5\u7A0B\u8D28\u68C0": ["\u623F\u4EA7/\u5EFA\u7B51", "\u8BBE\u8BA1\u88C5\u4FEE\u4E0E\u5E02\u653F\u5EFA\u8BBE", "\u5EFA\u7B51\u5DE5\u7A0B\u5E08"],
  "\u5DE5\u7A0B\u7BA1\u7406": ["\u623F\u4EA7/\u5EFA\u7B51", "\u8BBE\u8BA1\u88C5\u4FEE\u4E0E\u5E02\u653F\u5EFA\u8BBE", "\u5EFA\u7B51\u5DE5\u7A0B\u5E08"],
  "\u5DE5\u7A0B\u5F00\u53D1\u6280\u672F\u4EBA\u5458": ["\u623F\u4EA7/\u5EFA\u7B51", "\u8BBE\u8BA1\u88C5\u4FEE\u4E0E\u5E02\u653F\u5EFA\u8BBE", "\u5EFA\u7B51\u5DE5\u7A0B\u5E08"],
  "\u65BD\u5DE5\u5458": ["\u623F\u4EA7/\u5EFA\u7B51", "\u8BBE\u8BA1\u88C5\u4FEE\u4E0E\u5E02\u653F\u5EFA\u8BBE", "\u65BD\u5DE5\u5458"],
  "\u623F\u5730\u4EA7\u89C4\u5212\u5F00\u53D1": ["\u623F\u4EA7/\u5EFA\u7B51", "\u623F\u5730\u4EA7\u89C4\u5212\u5F00\u53D1", "\u623F\u5730\u4EA7\u89C4\u5212\u5F00\u53D1"],
  "\u623F\u5730\u4EA7\u4EA4\u6613": ["", "\u623F\u5730\u4EA7\u9500\u552E/\u62DB\u5546", "\u623F\u5730\u4EA7\u9500\u552E/\u62DB\u5546"],
  "\u5EFA\u7B51/\u5BA4\u5185\u8BBE\u8BA1": ["\u8BBE\u8BA1/\u4F20\u5A92", "\u975E\u89C6\u89C9\u8BBE\u8BA1", "\u5BA4\u5185\u8BBE\u8BA1"]
};
function formateData(job) {
  return {
    title: `${job.title}(${job.code})`,
    code: job.code,
    salaryFrom: job.salaryFrom,
    salaryTo: job.salaryTo,
    amount: 5,
    salmonths: job.salaryTimes + "\u4E2A\u6708",
    description: job.description,
    category: JOB_CATEGORIES_MAP[job.secondCategory.name],
    education: EDUCATION_MAP[job.educationFrom],
    specialized: ["\u5176\u4ED6", "\u4E0D\u9650"],
    experienceFrom: job.experienceFrom
  };
}
const getxPath = (xpath) => {
  var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
  const dom = result.iterateNext();
  if (dom) {
    return dom;
  } else {
    return null;
  }
};
const getJobs = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(type, (result) => {
        console.log("\u{1F44C} Get Job Success\uFF5E", result, type);
        resolve(result[type]);
      });
    } catch (error) {
      reject(error);
    }
  });
};
function autoSetJob(data) {
  console.log(data);
  const timeId = setInterval(() => {
    const titleELe = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[1]/div/div/div/div/div/input');
    if (titleELe) {
      clearInterval(timeId);
      if (titleELe) {
        $(titleELe).val(data.title);
        titleELe.dispatchEvent(new CustomEvent("input"));
      }
      const categoryEle = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[2]/div/div/div/input');
      categoryEle && $(categoryEle).trigger("click");
      setTimeout(async () => {
        $.each($(".fist-item"), (index, ele) => {
          if ($(ele).text() === data.category[0]) {
            $(ele).trigger("click");
          }
        });
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("ok");
          }, 1e3);
        });
        $.each($(".second-item"), (index, ele) => {
          if ($(ele).text() === data.category[1]) {
            $(ele).trigger("click");
          }
        });
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("ok");
          }, 1e3);
        });
        $.each($(".last-level span"), (index, ele) => {
          if ($(ele).text() === data.category[2]) {
            $(ele).trigger("click");
          }
        });
      }, 1e3);
      $.each($(".el-select-dropdown__item"), (index, ele) => {
        if ($(ele).text() === data.education) {
          $(ele).trigger("click");
        }
      });
      const jobDescEle = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[4]/div/div/div/textarea');
      if (jobDescEle) {
        $(jobDescEle).val(data.description);
        jobDescEle.dispatchEvent(new CustomEvent("input"));
      }
      const tagsTimeId = setInterval(() => {
        if ($(".recommend-tags").length > 0) {
          clearInterval(tagsTimeId);
          $.each($(".recommend-tags"), (index, ele) => {
            if ([1, 2, 3].includes(index)) {
              $(ele).trigger("click");
            }
          });
        }
      }, 1e3);
      const addressTimeId = setInterval(() => {
        const adressEle = $(".job-address__item");
        if (adressEle) {
          clearInterval(addressTimeId);
          $(adressEle).trigger("click");
        }
      }, 1e3);
      $.each($(".el-select-dropdown__item"), (index, ele) => {
        if ($(ele).text() === data.salaryFrom) {
          console.error($(ele).text());
          $(ele).trigger("click");
        }
      });
      const countEle = getxPath('//*[@id="app"]/div[1]/div/div[3]/div/div[1]/form/div[9]/div/div/div/input');
      if (countEle) {
        $(countEle).val(data.amount);
        countEle.dispatchEvent(new CustomEvent("input"));
      }
    }
  }, 1e3);
}
const singleJobPublish = async () => {
  const job = await getJobs("job");
  const formate = formateData(job);
  autoSetJob(formate);
};
async function init() {
  singleJobPublish();
}
init();
