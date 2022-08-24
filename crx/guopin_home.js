const JOB_CATEGORIES_MAP = {
  "\u573A\u52A1/\u5267\u52A1": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u5F71\u89C6/\u7F16\u5BFC", "\u5176\u4ED6\u5F71\u89C6/\u7F16\u5BFC\u804C\u4F4D\xA0"],
  "\u6F14\u827A\u4EBA\u5458/\u7ECF\u7EAA\u4EBA": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u5F71\u89C6/\u7F16\u5BFC", "\u7ECF\u7EAA\u4EBA/\u661F\u63A2"],
  "\u5F71\u89C6\u5236\u4F5C": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u5F71\u89C6/\u7F16\u5BFC", "\u5F71\u89C6\u7B56\u5212/\u5236\u4F5C\u4EBA\u5458"],
  "\u821E\u7F8E\u8BBE\u8BA1": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u5F71\u89C6/\u7F16\u5BFC", "\u827A\u672F\u6307\u5BFC/\u821E\u7F8E\u8BBE\u8BA1"],
  "\u5E7F\u544A": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u5E7F\u544A/\u4F1A\u5C55", "\u5176\u4ED6\u5E7F\u544A/\u4F1A\u5C55\u804C\u4F4D"],
  "IT\u57F9\u8BAD": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u624D\u827A\u7279\u957F\u57F9\u8BAD": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u6559\u52A1\u7BA1\u7406": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u6559\u5B66/\u6559\u52A1\u7BA1\u7406\u4EBA\u5458"],
  "\u8003\u7814\u8F85\u5BFC": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u7559\u5B66\u8F85\u5BFC": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u7559\u5B66\u987E\u95EE"],
  "\u7279\u6B8A\u6559\u80B2": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u7279\u6559(\u7279\u6B8A\u6559\u80B2)"],
  "\u8BED\u8A00\u57F9\u8BAD": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u65E9\u6559/\u5E7C\u6559": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5E7C\u6559"],
  "\u804C\u4E1A\u57F9\u8BAD": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u4E2D\u5C0F\u5B66\u8BFE\u7A0B\u8F85\u5BFC": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u9AD8\u7B49\u6559\u80B2": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u79D1\u7814/\u5B66\u672F\u7814\u7A76": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6559\u80B2\u57F9\u8BAD", "\u5176\u4ED6\u6559\u80B2\u57F9\u8BAD\u804C\u4F4D"],
  "\u4FDD\u9669": ["\u91D1\u878D", "\u4FDD\u9669", "\u5176\u4ED6\u4FDD\u9669\u804C\u4F4D"],
  "\u6295\u878D\u8D44": ["\u91D1\u878D", "\u57FA\u91D1/\u8BC1\u5238/\u671F\u8D27/\u6295\u8D44", "\u5176\u4ED6\u57FA\u91D1/\u8BC1\u5238/\u671F\u8D27/\u6295\u8D44"],
  "\u8BC1\u5238/\u57FA\u91D1/\u671F\u8D27": ["\u91D1\u878D", "\u57FA\u91D1/\u8BC1\u5238/\u671F\u8D27/\u6295\u8D44", "\u5176\u4ED6\u57FA\u91D1/\u8BC1\u5238/\u671F\u8D27/\u6295\u8D44"],
  "\u4FE1\u6258/\u62C5\u4FDD/\u62CD\u5356/\u5178\u5F53": ["\u91D1\u878D", "\u4FE1\u6258/\u62C5\u4FDD/\u62CD\u5356/\u5178\u5F53", "\u5176\u4ED6\u4FE1\u6258/\u62C5\u4FDD/\u62CD\u5356/\u5178\u5F53\u804C\u4F4D"],
  "\u94F6\u884C\u53CA\u91D1\u878D\u670D\u52A1": ["\u91D1\u878D", "\u94F6\u884C", "\u5176\u4ED6\u94F6\u884C\u804C\u4F4D"],
  "\u519C/\u6797/\u7267/\u6E14": ["\u80FD\u6E90/\u73AF\u4FDD/\u519C\u4E1A/\u79D1\u7814", "\u519C/\u6797/\u7267/\u6E14\u4E1A", "\u5176\u4ED6\u519C/\u6797/\u7267/\u6E14\u4E1A\u804C\u4F4D"],
  "\u73AF\u5883\u79D1\u5B66/\u73AF\u4FDD": ["\u80FD\u6E90/\u73AF\u4FDD/\u519C\u4E1A/\u79D1\u7814", "\u73AF\u5883\u79D1\u5B66", "\u5176\u4ED6\u73AF\u5883\u79D1\u5B66\u804C\u4F4D"],
  "\u80FD\u6E90/\u77FF\u4EA7/\u5730\u8D28": ["\u80FD\u6E90/\u73AF\u4FDD/\u519C\u4E1A/\u79D1\u7814", "\u80FD\u6E90/\u77FF\u4EA7/\u5730\u8D28\u52D8\u67E5", "\u5176\u4ED6\u80FD\u6E90/\u77FF\u4EA7/\u5730\u8D28\u52D8\u67E5\u804C\u4F4D"],
  "\u9648\u5217\u5C55\u793A\u8BBE\u8BA1": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u7F8E\u672F/\u8BBE\u8BA1", "\u5E97\u9762/\u5C55\u89C8/\u5C55\u793A/\u9648\u5217\u8BBE\u8BA1\xA0"],
  "\u52A8\u753B\u52A8\u6548\u8BBE\u8BA1": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u7F8E\u672F/\u8BBE\u8BA1", "\u591A\u5A92\u4F53/\u52A8\u753B\u8BBE\u8BA1"],
  "\u5DE5\u4E1A\u8BBE\u8BA1": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u7F8E\u672F/\u8BBE\u8BA1", "\u5DE5\u4E1A\u8BBE\u8BA1"],
  "\u89C6\u89C9/\u4EA4\u4E92\u8BBE\u8BA1": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u7F8E\u672F/\u8BBE\u8BA1", "\u5DE5\u4E1A\u8BBE\u8BA1"],
  "\u4EA7\u54C1\u7ECF\u7406": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u5176\u4ED6\u4EA7\u54C1/\u8FD0\u8425\u5C97\u4F4D"],
  "\u9AD8\u7EA7\u7BA1\u7406": ["\u9AD8\u7EA7\u7BA1\u7406", "\u9AD8\u7EA7\u7BA1\u7406\u5C97\u4F4D", "\u5176\u4ED6\u9AD8\u7EA7\u7BA1\u7406"],
  "\u9879\u76EE\u7BA1\u7406": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u9879\u76EE\u7BA1\u7406", "\u5176\u4ED6\u9879\u76EE\u7BA1\u7406\u804C\u4F4D"],
  "\u7B56\u5212": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u5E02\u573A/\u4F01\u5212", "\u5176\u4ED6\u5E02\u573A/\u4F01\u5212\u804C\u4F4D"],
  "\u53D1\u884C": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u5E02\u573A/\u4F01\u5212", "\u5176\u4ED6\u5E02\u573A/\u4F01\u5212\u804C\u4F4D"],
  "\u516C\u5173\u5A92\u4ECB": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u516C\u5173", "\u516C\u5173\u4E13\u5458/\u52A9\u7406\xA0"],
  "\u4F1A\u5C55\u4F1A\u52A1": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u5E02\u573A/\u4F01\u5212", "\u5176\u4ED6\u5E02\u573A/\u4F01\u5212\u804C\u4F4D"],
  "\u5E02\u573A/\u54C1\u724C\u63A8\u5E7F": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u516C\u5173", "\u516C\u5173\u4E13\u5458/\u52A9\u7406"],
  "\u5E02\u573A\u8C03\u7814": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u5E02\u573A/\u4F01\u5212", "\u5E02\u573A\u8C03\u7814\u4E0E\u5206\u6790"],
  "\u91C7\u8D2D/\u4F9B\u5E94\u94FE/\u6750\u6599\u7BA1\u7406": ["\u8D38\u6613/\u7269\u6D41/\u8FD0\u8F93/\u4F9B\u5E94\u94FE", "\u8D38\u6613/\u91C7\u8D2D", "\u5176\u4ED6\u8D38\u6613/\u91C7\u8D2D\u804C\u4F4D"],
  "\u4ED3\u50A8\u7BA1\u7406": ["\u8D38\u6613/\u7269\u6D41/\u8FD0\u8F93/\u4F9B\u5E94\u94FE", "\u7269\u6D41/\u4ED3\u50A8", "\u7269\u6D41/\u4ED3\u50A8\u9879\u76EE\u7BA1\u7406"],
  "\u4EA4\u901A\u8FD0\u8F93": ["\u8D38\u6613/\u7269\u6D41/\u8FD0\u8F93/\u4F9B\u5E94\u94FE", "\u4EA4\u901A/\u8FD0\u8F93", "\u5176\u4ED6\u4EA4\u901A/\u8FD0\u8F93\u804C\u4F4D"],
  "\u914D\u9001\u7406\u8D27": ["\u8D38\u6613/\u7269\u6D41/\u8FD0\u8F93/\u4F9B\u5E94\u94FE", "\u7269\u6D41/\u4ED3\u50A8", "\u5176\u4ED6\u7269\u6D41/\u4ED3\u50A8\u804C\u4F4D"],
  "\u7269\u6D41\u7BA1\u7406": ["\u8D38\u6613/\u7269\u6D41/\u8FD0\u8F93/\u4F9B\u5E94\u94FE", "\u7269\u6D41/\u4ED3\u50A8", "\u5176\u4ED6\u7269\u6D41/\u4ED3\u50A8\u804C\u4F4D"],
  "\u5173\u52A1": ["\u8D38\u6613/\u7269\u6D41/\u8FD0\u8F93/\u4F9B\u5E94\u94FE", "\u7269\u6D41/\u4ED3\u50A8", "\u5176\u4ED6\u7269\u6D41/\u4ED3\u50A8\u804C\u4F4D"],
  "\u8D22\u52A1": ["\u8D22\u52A1/\u4EBA\u4E8B/\u884C\u653F/\u540E\u52E4", "\u8D22\u52A1/\u5BA1\u8BA1/\u7A0E\u52A1", "\u5176\u4ED6\u8D22\u52A1/\u5BA1\u8BA1/\u7A0E\u52A1\u804C\u4F4D"],
  "\u6863\u6848\u7BA1\u7406": ["\u8D22\u52A1/\u4EBA\u4E8B/\u884C\u653F/\u540E\u52E4", "\u884C\u653F/\u540E\u52E4/\u6587\u79D8", "\u5176\u4ED6\u884C\u653F/\u540E\u52E4/\u6587\u79D8\u804C\u4F4D"],
  "\u884C\u653F": ["\u8D22\u52A1/\u4EBA\u4E8B/\u884C\u653F/\u540E\u52E4", "\u884C\u653F/\u540E\u52E4/\u6587\u79D8", "\u5176\u4ED6\u884C\u653F/\u540E\u52E4/\u6587\u79D8\u804C\u4F4D"],
  "\u5408\u89C4\u98CE\u63A7/\u6CD5\u52A1/\u5F8B\u5E08": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u6CD5\u5F8B", "\u5176\u4ED6\u6CD5\u5F8B\u804C\u4F4D"],
  "\u4EBA\u4E8B": ["\u8D22\u52A1/\u4EBA\u4E8B/\u884C\u653F/\u540E\u52E4", "\u4EBA\u529B\u8D44\u6E90", "\u5176\u4ED6\u4EBA\u529B\u8D44\u6E90"],
  "\u6587\u5458/\u52A9\u7406": ["\u8D22\u52A1/\u4EBA\u4E8B/\u884C\u653F/\u540E\u52E4", "\u884C\u653F/\u540E\u52E4/\u6587\u79D8", "\u5176\u4ED6\u884C\u653F/\u540E\u52E4/\u6587\u79D8\u804C\u4F4D"],
  "\u9500\u552E\u987E\u95EE": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u9500\u552E", "\u9500\u552E\u7ECF\u7406"],
  "\u5546\u52A1\u62D3\u5C55": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u9500\u552E", "\u5546\u52A1\u7ECF\u7406/\u4E3B\u7BA1"],
  "\u9500\u552E\u7BA1\u7406": ["\u5E02\u573A/\u9500\u552E/\u5A92\u4ECB/\u516C\u5173/\u9879\u76EE\u7BA1\u7406", "\u9500\u552E", "\u9500\u552E\u7ECF\u7406"],
  "\u6D4B\u8BD5\u5DE5\u7A0B\u5E08": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u6D4B\u8BD5/\u8FD0\u7EF4/\u6280\u672F\u652F\u6301", "\u6D4B\u8BD5\u5DE5\u7A0B\u5E08"],
  "\u8FD0\u7EF4\u652F\u6301": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u6D4B\u8BD5/\u8FD0\u7EF4/\u6280\u672F\u652F\u6301", "\u5176\u4ED6\u6D4B\u8BD5/\u8FD0\u7EF4/\u6280\u672F\u652F\u6301\u804C\u4F4D"],
  "\u552E\u524D\u552E\u540E\u5DE5\u7A0B\u5E08": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u6D4B\u8BD5/\u8FD0\u7EF4/\u6280\u672F\u652F\u6301", "\u5176\u4ED6\u6D4B\u8BD5/\u8FD0\u7EF4/\u6280\u672F\u652F\u6301\u804C\u4F4D"],
  "\u7269\u4E1A/\u5B89\u4FDD": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u5C45\u6C11/\u793E\u533A/\u5BB6\u653F", "\u5176\u4ED6\u5C45\u6C11/\u793E\u533A/\u5BB6\u653F\u804C\u4F4D"],
  "\u9910\u996E\u670D\u52A1": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u9152\u5E97/\u5A31\u4E50\u7BA1\u7406/\u670D\u52A1", "\u5176\u4ED6\u9152\u5E97/\u5A31\u4E50\u7BA1\u7406/\u670D\u52A1\u804C\u4F4D"],
  "\u9152\u5E97\u670D\u52A1": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u9152\u5E97/\u5A31\u4E50\u7BA1\u7406/\u670D\u52A1", "\u5176\u4ED6\u9152\u5E97/\u5A31\u4E50\u7BA1\u7406/\u670D\u52A1\u804C\u4F4D"],
  "\u65C5\u6E38\u670D\u52A1": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u65C5\u6E38/\u51FA\u5165\u5883\u670D\u52A1", "\u5176\u4ED6\u65C5\u6E38/\u51FA\u5165\u5883\u670D\u52A1\u804C\u4F4D\xA0"],
  "\u5065\u5EB7/\u7F8E\u5BB9": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u4FDD\u5065/\u7F8E\u5BB9/\u7F8E\u53D1/\u5065\u8EAB", "\u5176\u4ED6\u4FDD\u5065/\u7F8E\u5BB9/\u7F8E\u53D1/\u5065\u8EAB\u804C\u4F4D"],
  "\u5BB6\u653F/\u7EF4\u4FEE": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u5C45\u6C11/\u793E\u533A/\u5BB6\u653F", "\u5176\u4ED6\u5C45\u6C11/\u793E\u533A/\u5BB6\u653F\u804C\u4F4D"],
  "\u4E13\u4E1A\u670D\u52A1": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u5BA2\u670D/\u552E\u524D/\u552E\u540E\u6280\u672F\u652F\u6301", "\u5176\u4ED6\u5BA2\u670D/\u552E\u524D/\u552E\u540E\u6280\u672F\u652F\u6301\u804C\u4F4D"],
  "\u5546\u52A1\u670D\u52A1": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u9152\u5E97/\u5A31\u4E50\u7BA1\u7406/\u670D\u52A1", "\u5176\u4ED6\u9152\u5E97/\u5A31\u4E50\u7BA1\u7406/\u670D\u52A1\u804C\u4F4D"],
  "\u8FD0\u52A8\u5065\u8EAB": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u4FDD\u5065/\u7F8E\u5BB9/\u7F8E\u53D1/\u5065\u8EAB", "\u5176\u4ED6\u4FDD\u5065/\u7F8E\u5BB9/\u7F8E\u53D1/\u5065\u8EAB\u804C\u4F4D"],
  "\u96F6\u552E\u767E\u8D27": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u767E\u8D27/\u8D2D\u7269\u4E2D\u5FC3/\u8FDE\u9501/\u5546\u8D85", "\u5176\u4ED6\u767E\u8D27/\u8D2D\u7269\u4E2D\u5FC3/\u8FDE\u9501/\u5546\u8D85\u804C\u4F4D"],
  "\u7BA1\u57F9\u751F/\u50A8\u5907\u5E72\u90E8": ["\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814/\u5176\u4ED6", "\u5176\u4ED6", "\u50A8\u5907\u5E72\u90E8"],
  "\u793E\u5DE5": ["\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814/\u5176\u4ED6", "\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814", "\u5176\u4ED6\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814"],
  "\u653F\u5E9C\u53CA\u975E\u76C8\u5229\u673A\u6784\u4ECE\u4E1A\u8005": ["\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814/\u5176\u4ED6", "\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814", "\u5176\u4ED6\u516C\u52A1\u5458/\u516C\u76CA\u4E8B\u4E1A/\u79D1\u7814"],
  "\u7535\u5546\u8FD0\u8425": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u7535\u5546\u8FD0\u8425"],
  "\u65B0\u5A92\u4F53\u8FD0\u8425": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u65B0\u5A92\u4F53\u8FD0\u8425"],
  "\u4E1A\u52A1\u8FD0\u8425": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u7528\u6237\u8FD0\u8425"],
  "\u8FD0\u8425\u7BA1\u7406": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u7F51\u7EDC\u8FD0\u8425\u7BA1\u7406"],
  "\u4E13\u4E1A\u5206\u6790": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u5176\u4ED6\u4EA7\u54C1/\u8FD0\u8425\u5C97\u4F4D"],
  "\u5BA2\u6237\u670D\u52A1": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u4EA7\u54C1/\u8FD0\u8425\u7BA1\u7406", "\u5BA2\u670D\u7BA1\u7406"],
  "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020/\u7EF4\u4FEE", "\u673A\u68B0\u7EF4\u4FEE/\u4FDD\u517B"],
  "\u673A\u68B0\u8BBE\u5907\u7EF4\u4FEE": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u673A\u68B0\u8BBE\u8BA1/\u5236\u9020/\u7EF4\u4FEE", "\u673A\u68B0\u7EF4\u4FEE/\u4FDD\u517B"],
  "\u6C7D\u8F66\u5236\u9020": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u6C7D\u8F66\u5236\u9020", "\u5176\u4ED6\u6C7D\u8F66\u5236\u9020\u804C\u4F4D"],
  "\u6C7D\u8F66\u9500\u552E\u4E0E\u670D\u52A1": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u6C7D\u8F66\u9500\u552E/\u670D\u52A1", "\u5176\u4ED6\u6C7D\u8F66\u9500\u552E/\u670D\u52A1\u804C\u4F4D"],
  "\u666E\u5DE5/\u6280\u5DE5": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u6280\u5DE5/\u666E\u5DE5", "\u5176\u4ED6\u666E\u5DE5/\u64CD\u4F5C\u5DE5"],
  "\u751F\u4EA7\u7BA1\u7406": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u751F\u4EA7\u7BA1\u7406/\u8425\u8FD0", "\u751F\u4EA7\u8FD0\u8425\u7BA1\u7406"],
  "\u751F\u4EA7\u8D28\u91CF\u7BA1\u7406": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u8D28\u91CF\u7BA1\u7406/\u5B89\u5168\u9632\u62A4", "\u5176\u4ED6\u8D28\u91CF\u7BA1\u7406/\u5B89\u5168\u9632\u62A4\u804C\u4F4D"],
  "\u670D\u88C5/\u7EBA\u7EC7/\u76AE\u9769": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u670D\u88C5/\u7EBA\u7EC7/\u76AE\u9769", "\u5176\u4ED6\u670D\u88C5/\u7EBA\u7EC7/\u76AE\u9769\u804C\u4F4D"],
  "\u5370\u5237\u5305\u88C5": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u5316\u5DE5", "\u9020\u7EB8\u7814\u53D1"],
  "\u5316\u5DE5": ["\u751F\u4EA7/\u6280\u672F/\u5B89\u5168/\u8D28\u91CF", "\u5316\u5DE5", "\u5176\u4ED6\u5316\u5DE5\u804C\u4F4D"],
  "\u7F16\u8F91/\u7F16\u6821/\u4F5C\u5BB6": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u7F16\u8F91/\u51FA\u7248/\u5370\u5237", "\u7F16\u8F91/\u64B0\u7A3F\xA0"],
  "\u7FFB\u8BD1": ["\u6CD5\u5F8B/\u6559\u80B2\u57F9\u8BAD/\u7BA1\u7406\u54A8\u8BE2/\u7FFB\u8BD1", "\u7FFB\u8BD1", "\u5176\u4ED6\u8BED\u79CD\u7FFB\u8BD1"],
  "\u8BB0\u8005/\u91C7\u7F16": ["\u5E7F\u544A/\u4F20\u5A92/\u8BBE\u8BA1", "\u7F16\u8F91/\u51FA\u7248/\u5370\u5237", "\u8BB0\u8005/\u91C7\u7F16"],
  "\u751F\u7269/\u533B\u836F": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u533B\u9662/\u533B\u7597/\u62A4\u7406", "\u5176\u4ED6\u533B\u7597\u62A4\u7406\u804C\u4F4D"],
  "\u533B\u7597\u5668\u68B0": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u533B\u9662/\u533B\u7597/\u62A4\u7406", "\u5176\u4ED6\u533B\u7597\u62A4\u7406\u804C\u4F4D"],
  "\u62A4\u58EB/\u533B\u52A9": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u533B\u9662/\u533B\u7597/\u62A4\u7406", "\u5176\u4ED6\u533B\u7597\u62A4\u7406\u804C\u4F4D"],
  "\u533B\u751F/\u836F\u5242\u5E08": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u533B\u9662/\u533B\u7597/\u62A4\u7406", "\u5176\u4ED6\u533B\u7597\u62A4\u7406\u804C\u4F4D"],
  "\u533B\u52A1\u7BA1\u7406": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u533B\u9662/\u533B\u7597/\u62A4\u7406", "\u5176\u4ED6\u533B\u7597\u62A4\u7406\u804C\u4F4D"],
  "\u836F\u5E97": ["\u751F\u6D3B\u670D\u52A1/\u533B\u7597\u62A4\u7406", "\u533B\u9662/\u533B\u7597/\u62A4\u7406", "\u5176\u4ED6\u533B\u7597\u62A4\u7406\u804C\u4F4D"],
  "\u524D\u7AEF\u5F00\u53D1": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u524D\u7AEF/\u79FB\u52A8\u7AEF", "WEB\u524D\u7AEF\u5F00\u53D1"],
  "\u4EBA\u5DE5\u667A\u80FD": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u6570\u636E/\u4EBA\u5DE5\u667A\u80FD", "\u673A\u5668\u5B66\u4E60"],
  "\u8F6F\u4EF6\u7814\u53D1": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u5F00\u53D1/\u7CFB\u7EDF\u96C6\u6210", "\u8F6F\u4EF6\u7814\u53D1\u5DE5\u7A0B\u5E08"],
  "\u6570\u636E\u5DE5\u7A0B\u5E08": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u6570\u636E/\u4EBA\u5DE5\u667A\u80FD", "\u6570\u636E\u5206\u6790\u5E08"],
  "\u79FB\u52A8\u7814\u53D1": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u524D\u7AEF/\u79FB\u52A8\u7AEF", "\u79FB\u52A8\u5F00\u53D1\u5DE5\u7A0B\u5E08"],
  "\u901A\u4FE1\u53CA\u786C\u4EF6\u7814\u53D1": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u7535\u4FE1/\u901A\u4FE1\u6280\u672F\u5F00\u53D1\u53CA\u5E94\u7528", "\u5176\u4ED6\u7535\u4FE1/\u901A\u4FE1\u6280\u672F\u804C\u4F4D"],
  "\u7535\u5B50/\u7535\u5668/\u534A\u5BFC\u4F53": ["\u8BA1\u7B97\u673A/\u4E92\u8054\u7F51/\u901A\u4FE1", "\u4E92\u8054\u7F51\u5F00\u53D1/\u7CFB\u7EDF\u96C6\u6210", "\u5176\u4ED6\u4E92\u8054\u7F51\u5F00\u53D1/\u7CFB\u7EDF\u96C6\u6210\u804C\u4F4D"],
  "\u5DE5\u7A0B\u5B89\u5168/\u5DE5\u7A0B\u8D28\u68C0": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u571F\u6728/\u5EFA\u7B51/\u88C5\u4FEE/\u5E02\u653F\u5DE5\u7A0B", "\u5DE5\u7A0B\u76D1\u7406/\u8D28\u91CF\u7BA1\u7406"],
  "\u5DE5\u7A0B\u7BA1\u7406": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u571F\u6728/\u5EFA\u7B51/\u88C5\u4FEE/\u5E02\u653F\u5DE5\u7A0B", "\u5DE5\u7A0B\u603B\u76D1"],
  "\u5DE5\u7A0B\u5F00\u53D1\u6280\u672F\u4EBA\u5458": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u571F\u6728/\u5EFA\u7B51/\u88C5\u4FEE/\u5E02\u653F\u5DE5\u7A0B", "\u5EFA\u7B51\u8BBE\u5907\u5DE5\u7A0B\u5E08"],
  "\u65BD\u5DE5\u5458": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u571F\u6728/\u5EFA\u7B51/\u88C5\u4FEE/\u5E02\u653F\u5DE5\u7A0B", "\u65BD\u5DE5\u5458"],
  "\u623F\u5730\u4EA7\u89C4\u5212\u5F00\u53D1": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u623F\u5730\u4EA7\u5F00\u53D1/\u4EA4\u6613/\u7ECF\u6D4E", "\u623F\u5730\u4EA7\u9879\u76EE\u7B56\u5212\u7ECF\u7406/\u4E3B\u7BA1"],
  "\u623F\u5730\u4EA7\u4EA4\u6613": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u623F\u5730\u4EA7\u5F00\u53D1/\u4EA4\u6613/\u7ECF\u6D4E", "\u623F\u5730\u4EA7\u4E2D\u4ECB/\u4EA4\u6613"],
  "\u5EFA\u7B51/\u5BA4\u5185\u8BBE\u8BA1": ["\u623F\u4EA7/\u5EFA\u7B51/\u7269\u4E1A\u7BA1\u7406", "\u571F\u6728/\u5EFA\u7B51/\u88C5\u4FEE/\u5E02\u653F\u5DE5\u7A0B", "\u5BA4\u5185\u88C5\u6F62\u8BBE\u8BA1"]
};
const CITY_MAP = {
  "\u829C\u6E56\u5E02": ["\u5B89\u5FBD", "\u829C\u6E56"],
  "\u5317\u4EAC\u5E02": ["\u5317\u4EAC", "\u5317\u4EAC\u5E02"],
  "\u798F\u5DDE\u5E02": ["\u798F\u5EFA", "\u798F\u5DDE"],
  "\u53A6\u95E8\u5E02": ["\u798F\u5EFA", "\u53A6\u95E8"],
  "\u5E7F\u5DDE\u5E02": ["\u5E7F\u4E1C", "\u5E7F\u5DDE"],
  "\u97F6\u5173\u5E02": ["\u5E7F\u4E1C", "\u97F6\u5173"],
  "\u6DF1\u5733\u5E02": ["\u5E7F\u4E1C", "\u6DF1\u5733"],
  "\u63ED\u9633\u5E02": ["\u5E7F\u4E1C", "\u63ED\u9633"],
  "\u6CB3\u6E90\u5E02": ["\u5E7F\u4E1C", "\u6CB3\u6E90"],
  "\u9633\u6C5F\u5E02": ["\u5E7F\u4E1C", "\u9633\u6C5F"],
  "\u6E05\u8FDC\u5E02": ["\u5E7F\u4E1C", "\u6E05\u8FDC"],
  "\u4E1C\u839E\u5E02": ["\u5E7F\u4E1C", "\u4E1C\u839E"],
  "\u4E2D\u5C71\u5E02": ["\u5E7F\u4E1C", "\u4E2D\u5C71"],
  "\u6F6E\u5DDE\u5E02": ["\u5E7F\u4E1C", "\u6F6E\u5DDE"],
  "\u60E0\u5DDE\u5E02": ["\u5E7F\u4E1C", "\u60E0\u5DDE"],
  "\u8087\u5E86\u5E02": ["\u5E7F\u4E1C", "\u8087\u5E86"],
  "\u6885\u5DDE\u5E02": ["\u5E7F\u4E1C", "\u6885\u5DDE"],
  "\u6C55\u5C3E\u5E02": ["\u5E7F\u4E1C", "\u6C55\u5C3E"],
  "\u4E91\u6D6E\u5E02": ["\u5E7F\u4E1C", "\u4E91\u6D6E"],
  "\u73E0\u6D77\u5E02": ["\u5E7F\u4E1C", "\u73E0\u6D77"],
  "\u6C55\u5934\u5E02": ["\u5E7F\u4E1C", "\u6C55\u5934"],
  "\u4F5B\u5C71\u5E02": ["\u5E7F\u4E1C", "\u4F5B\u5C71"],
  "\u6C5F\u95E8\u5E02": ["\u5E7F\u4E1C", "\u6C5F\u95E8"],
  "\u6E5B\u6C5F\u5E02": ["\u5E7F\u4E1C", "\u6E5B\u6C5F"],
  "\u8302\u540D\u5E02": ["\u5E7F\u4E1C", "\u8302\u540D"],
  "\u4FDD\u5B9A\u5E02": ["\u6CB3\u5317", "\u4FDD\u5B9A"],
  "\u5357\u9633\u5E02": ["\u6CB3\u5357", "\u5357\u9633"],
  "\u90D1\u5DDE\u5E02": ["\u6CB3\u5357", "\u90D1\u5DDE"],
  "\u6B66\u6C49\u5E02": ["\u6E56\u5317", "\u6B66\u6C49"],
  "\u957F\u6C99\u5E02": ["\u6E56\u5357", "\u957F\u6C99"],
  "\u65E0\u9521\u5E02": ["\u6C5F\u82CF", "\u65E0\u9521"],
  "\u629A\u5DDE\u5E02": ["\u6C5F\u897F", "\u629A\u5DDE"],
  "\u5927\u8FDE\u5E02": ["\u8FBD\u5B81", "\u5927\u8FDE"],
  "\u6D4E\u5357\u5E02": ["\u5C71\u4E1C", "\u6D4E\u5357"],
  "\u9752\u5C9B\u5E02": ["\u5C71\u4E1C", "\u9752\u5C9B"],
  "\u804A\u57CE\u5E02": ["\u5C71\u4E1C", "\u804A\u57CE"],
  "\u897F\u5B89\u5E02": ["\u9655\u897F", "\u897F\u5B89"],
  "\u4E0A\u6D77\u5E02": ["\u4E0A\u6D77", "\u4E0A\u6D77\u5E02"],
  "\u6210\u90FD\u5E02": ["\u56DB\u5DDD", "\u6210\u90FD"],
  "\u676D\u5DDE\u5E02": ["\u6D59\u6C5F", "\u676D\u5DDE"],
  "\u53F0\u5DDE\u5E02": ["\u6D59\u6C5F", "\u53F0\u5DDE"],
  "\u91D1\u534E\u5E02": ["\u6D59\u6C5F", "\u91D1\u534E"]
};
const TITLE_TO_ELEMENT_ID_MAP = {
  "jobs_name": "title",
  "jobs_num": "code",
  "jobs_code": "code",
  "minwage": "salaryFrom",
  "minwage_inter": "salaryFrom",
  "maxwage": "salaryTo",
  "maxwage_inter": "salaryTo",
  "salmonths": "salmonths",
  "amount": "amount",
  "contents": "description",
  "contentsdesc": "description"
};
const EDUCATION_MAP = {
  "\u535A\u58EB": "\u535A\u58EB\u7814\u7A76\u751F",
  "\u7855\u58EB": "\u7855\u58EB\u7814\u7A76\u751F",
  "\u672C\u79D1": "\u5927\u5B66\u672C\u79D1",
  "\u4E13\u79D1": "\u5927\u5B66\u4E13\u79D1",
  "\u9AD8\u4E2D": "\u4E2D\u4E13",
  "\u4E2D\u4E13\u4E2D\u6280": "\u4E2D\u4E13",
  "\u4E2D\u4E13/\u4E2D\u6280": "\u4E2D\u4E13",
  "\u521D\u4E2D\u53CA\u4EE5\u4E0B": "\u5176\u4ED6",
  "\u4E0D\u9650": "\u65E0\u5B66\u5386\u8981\u6C42"
};
const JOB_TYPE_MAP = {
  "\u6821\u62DB": "\u5E94\u5C4A\u751F",
  "\u5B9E\u4E60": "\u5B9E\u4E60",
  "\u793E\u62DB": "\u793E\u62DB"
};
const WORK_EXPERIENCE = {
  "\u7ECF\u9A8C\u4E0D\u9650": "\u4E0D\u9650",
  "\u65E0\u7ECF\u9A8C\u8981\u6C42": "\u65E0\u7ECF\u9A8C",
  "\u5176\u4ED6\u5E74\u9650": "n \u5E74\u4EE5\u4E0A"
};
const getJobLocalstory = (type) => {
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
function enterInput(id, text) {
  $(id).val(text);
}
function getSecondJobDom(title) {
  let result = null;
  const JSecondJob = $(".modal_body_box > .item:nth-child(2) ul");
  $.each(JSecondJob, (index, item) => {
    const lis = $(item).find("li");
    $.each(lis, (i, li) => {
      if ($(li).text() === title) {
        result = $(li);
      }
    });
  });
  return result;
}
function setWeekCount() {
  $.each($(".J_listitme"), (index, el) => {
    if ($(el).text() === "5\u5929") {
      el.click();
    }
  });
}
function formatNumber(value) {
  if (value.indexOf("\u5343") !== -1) {
    return parseFloat(value) * 1e3;
  } else if (value.indexOf("\u4E07") !== -1) {
    return parseFloat(value) * 1e4;
  } else {
    return value;
  }
}
function formateData(job) {
  const city = job.officeLocation.split("-")[0];
  return {
    title: `${job.title}\u2014${job.company.name}\u2014${job.code}`,
    code: job.code,
    type: JOB_TYPE_MAP[job.recruitmentTypeName],
    salaryFrom: formatNumber(job.salaryFrom),
    salaryTo: formatNumber(job.salaryTo),
    amount: 3,
    salmonths: job.salaryTimes,
    description: job.description,
    category: JOB_CATEGORIES_MAP[job.secondCategory.name],
    city: Object.keys(CITY_MAP).includes(city) ? CITY_MAP[city] : ["\u5176\u4ED6\u5730\u533A", "\u5168\u56FD"],
    education: EDUCATION_MAP[job.educationFrom],
    specialized: ["\u5176\u4ED6", "\u4E0D\u9650"],
    experienceFrom: job.experienceFrom
  };
}
const clearJobLocalstory = (type) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.remove(type, () => {
        console.log("\u{1F9F9} Clear Job Success\uFF5E");
      });
      resolve(1);
    } catch (error) {
      reject();
    }
  });
};
const saveJobLocalStory = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, function() {
        console.log("\u{1F604} [guopin_home.js]: Save Data Success\uFF5E");
        resolve(1);
      });
    } catch (error) {
      reject();
    }
  });
};
const setWorkExperience = (experienceFrom) => {
  $.each($(".J_listitme"), (index, el) => {
    console.log(el);
    if (experienceFrom.indexOf("\u5E74") !== -1) {
      if (experienceFrom === "1\u5E74" && $(el).text() === "1\u5E74\u4EE5\u4E0A") {
        el.click();
      } else if ($(el).text().indexOf(experienceFrom) !== -1) {
        el.click();
      }
    } else {
      if ($(el).text() === WORK_EXPERIENCE[experienceFrom]) {
        el.click();
      }
    }
  });
};
const setSpecialized = (data) => {
  $("#J_showmodal_major").click();
  $(`li[data-title='${data.specialized[0]}']`).click();
  $(`li[data-code="123"]`).click();
  $("#J_btnyes_major").click();
};
function getNowDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  if (Number(month) >= 1 && Number(month) <= 9) {
    month = "0" + month;
  }
  if (Number(day) >= 0 && Number(day) <= 9) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day + " 00:00";
}
async function autoSetSchoolJob(data) {
  Object.keys(TITLE_TO_ELEMENT_ID_MAP).forEach((id) => {
    const value = data[TITLE_TO_ELEMENT_ID_MAP[id]];
    enterInput(`#${id}`, String(value));
  });
  $(`.J_radioitme_jobs:contains(${data.type})`).click();
  switch (data.type) {
    case "\u5E94\u5C4A\u751F":
    case "\u5B9E\u4E60":
      {
        setWeekCount();
        setSpecialized(data);
      }
      break;
    case "\u793E\u62DB":
      setWorkExperience(data.experienceFrom);
      break;
  }
  $("#J_showmodal_jobs").click();
  data.category.map((title, index) => {
    if (index === 0) {
      $(`label[name='${title}']`).click();
    } else if (index === 1) {
      const targetEle = getSecondJobDom(title);
      if (targetEle) {
        targetEle.click();
      } else {
        throw Error("\u{1F645} \u6CA1\u6709\u83B7\u53D6\u804C\u4F4D DOM \u5143\u7D20");
      }
    } else {
      $(`label[data-title='${title}']`).click();
    }
  });
  $("div[data-title='\u8BF7\u9009\u62E9\u5DE5\u4F5C\u5730\u533A']").click();
  data.city.map((targetCity, index) => {
    if (index === 0) {
      $.each($(".list_nav li"), (index2, province) => {
        if ($(province).text() === targetCity) {
          $(province).click();
        }
      });
    } else {
      $.each($(".J_list_city"), (index2, city) => {
        if ($(city).text() === targetCity) {
          $(city).click();
        }
      });
    }
  });
  $("#J_btnyes_city").click();
  $.each($(".J_listitme"), (index, el) => {
    if ($(el).text() === data.education) {
      el.click();
    }
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (["\u793E\u62DB"].includes(data.type)) {
        $("#start_date").val(getNowDate(new Date()));
        var now = new Date();
        var seconds = 60 * 60 * 24 * 30 * 1e3;
        var timestamp = now.getTime();
        var newDate = timestamp + seconds;
        $("#end_date").val(getNowDate(new Date(newDate)));
      } else {
        $("#starttime").click();
        $(".laydate-btns-confirm").click();
        $("#endtime").click();
        $(".laydate-next-m").click();
        $(".laydate-btns-confirm").click();
      }
      resolve(1);
    }, 2e3);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      $("#department").click();
      const time = setInterval(() => {
        const dom = $("#layui-layer-iframe1").contents().find(".layui-tree-txt:contains('RPO')");
        if (dom.length > 0) {
          dom.click();
          clearInterval(time);
          resolve(1);
        }
      }, 2e3);
    }, 1e3);
  });
  $("#check_protocal").click();
}
const singleJobPublish = async () => {
  const data = await getJobLocalstory("job");
  console.log(data);
  const formate = formateData(data);
  console.table(formate);
  await autoSetSchoolJob(formate);
  $("#J_release").click();
  await clearJobLocalstory("job");
};
const multipleJobPublish = async () => {
  const index = await getJobLocalstory("multipleIndex");
  const count = await getJobLocalstory("count");
  const jobs = await getJobLocalstory("jobs");
  console.log(index, count, jobs, jobs[index]);
  if (index < count) {
    const formate = formateData(jobs[index]);
    await autoSetSchoolJob(formate);
    $("#J_release").click();
    console.log("index", index + 1);
    await saveJobLocalStory("multipleIndex", index + 1);
  } else {
    await clearJobLocalstory("jobs");
    console.log("------------------- \u53D1\u5E03\u5931\u8D25 ---------------");
  }
};
async function init() {
  const type = await getJobLocalstory("type");
  switch (type) {
    case "single":
      singleJobPublish();
      break;
    case "multiple":
      multipleJobPublish();
      break;
  }
}
init();
