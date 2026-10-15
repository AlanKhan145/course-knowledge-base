(function () {
  'use strict';

  try {
    if (!Array.isArray(vocab) || !Array.isArray(practiceQuestions) || !Array.isArray(testQuestions)) return;

    var TARGET_PER_TYPE = 15;
    var EXAM_PER_TYPE = 10;
    var category = 'full-bank';
    var pageName = decodeURIComponent(window.location.pathname.split('/').pop() || '').replace(/\.html$/i, '');
    var lessonKey = (typeof LESSON_ID === 'string' ? LESSON_ID : pageName).toLowerCase();
    var labels = {
      'multiple-choice': 'Trắc nghiệm',
      'fill-blank': 'Điền từ',
      'word-bank': 'Ngân hàng từ',
      'matching': 'Nối cặp',
      'categorization': 'Phân loại',
      'sentence-order': 'Sắp xếp câu',
      'image-choice': 'Nhìn hình chọn đáp án',
      'image-match': 'Ghép hình',
      'mini-reading': 'Đọc hiểu',
      'true-false': 'Đúng / Sai',
      'select-all': 'Chọn nhiều đáp án',
      'multi-fill': 'Điền nhiều chỗ trống',
      'short-answer': 'Tự trả lời',
      'production': 'Viết / nói ứng dụng',
      'error-correction': 'Sửa lỗi',
      'cloze': 'Điền vào đoạn văn'
    };

    var errorBank = {
      '03-have-had-had': [
        ['Yesterday, I have breakfast at seven.', 'Yesterday, I had breakfast at seven.', 'Yesterday đặt câu ở quá khứ nên dùng had.'],
        ['She have a shower every morning.', 'She has a shower every morning.', 'She là ngôi thứ ba số ít nên dùng has.'],
        ['Did you had lunch at school?', 'Did you have lunch at school?', 'Sau did dùng động từ nguyên mẫu have.'],
        ['We have had dinner yesterday.', 'We had dinner yesterday.', 'Không dùng hiện tại hoàn thành với mốc yesterday.'],
        ['He doesn’t has much time.', 'He doesn’t have much time.', 'Sau doesn’t dùng have.'],
        ['I have a good time at the party last night.', 'I had a good time at the party last night.', 'Last night yêu cầu dạng quá khứ had.']
      ],
      '04-go-went-gone': [
        ['They goed to the museum last Sunday.', 'They went to the museum last Sunday.', 'Quá khứ của go là went.'],
        ['She go to work by bus every day.', 'She goes to work by bus every day.', 'She cần dạng hiện tại goes.'],
        ['Did he went home at six?', 'Did he go home at six?', 'Sau did dùng go.'],
        ['We have went to the new café.', 'We have gone to the new café.', 'Sau have dùng quá khứ phân từ gone.'],
        ['I went to home after class.', 'I went home after class.', 'Không dùng to trước home.'],
        ['They go to the cinema yesterday.', 'They went to the cinema yesterday.', 'Yesterday yêu cầu quá khứ went.']
      ],
      '05-do-did-done': [
        ['She don’t do the washing-up.', 'She doesn’t do the washing-up.', 'She dùng doesn’t trong câu phủ định hiện tại.'],
        ['Did you did your homework?', 'Did you do your homework?', 'Sau did dùng do.'],
        ['He do some exercise after work.', 'He does some exercise after work.', 'He cần does ở hiện tại đơn.'],
        ['We have did the exercises.', 'We have done the exercises.', 'Sau have dùng quá khứ phân từ done.'],
        ['I did a mistake in question three.', 'I made a mistake in question three.', 'Collocation tự nhiên là make a mistake.'],
        ['Does she likes tennis?', 'Does she like tennis?', 'Sau does dùng động từ nguyên mẫu like.']
      ],
      '06-make-made-made': [
        ['She maked a cake for the party.', 'She made a cake for the party.', 'Quá khứ của make là made.'],
        ['He make the bed every morning.', 'He makes the bed every morning.', 'He cần dạng hiện tại makes.'],
        ['I did a decision too quickly.', 'I made a decision too quickly.', 'Collocation là make a decision.'],
        ['They made their homework after dinner.', 'They did their homework after dinner.', 'Collocation là do homework.'],
        ['Does she makes breakfast?', 'Does she make breakfast?', 'Sau does dùng make nguyên mẫu.'],
        ['We make a lot of noise yesterday.', 'We made a lot of noise yesterday.', 'Yesterday yêu cầu dạng quá khứ made.']
      ],
      '07-come-came-come': [
        ['My cousins comed to visit us last week.', 'My cousins came to visit us last week.', 'Quá khứ của come là came.'],
        ['He come home at about six every day.', 'He comes home at about six every day.', 'He cần dạng hiện tại comes.'],
        ['Has your friend came back yet?', 'Has your friend come back yet?', 'Sau has dùng quá khứ phân từ come.'],
        ['Please come to here and sit down.', 'Please come here and sit down.', 'Không dùng to trước here.'],
        ['Where you come from?', 'Where do you come from?', 'Câu hỏi hiện tại đơn cần do.'],
        ['She came back tomorrow.', 'She will come back tomorrow.', 'Tomorrow diễn tả tương lai; dùng will come.']
      ],
      '08-take-took-taken': [
        ['The journey taked twenty minutes.', 'The journey took twenty minutes.', 'Quá khứ của take là took.'],
        ['She take the bus at eight every day.', 'She takes the bus at eight every day.', 'She cần dạng hiện tại takes.'],
        ['Did you took my umbrella?', 'Did you take my umbrella?', 'Sau did dùng take.'],
        ['He has took the train to work.', 'He has taken the train to work.', 'Sau has dùng quá khứ phân từ taken.'],
        ['We made a photo of the bridge.', 'We took a photo of the bridge.', 'Collocation là take a photo.'],
        ['How long does it took to get there?', 'How long does it take to get there?', 'Sau does dùng take nguyên mẫu.']
      ],
      '09-bring-brought-brought': [
        ['She bringed a present for her friend.', 'She brought a present for her friend.', 'Quá khứ của bring là brought.'],
        ['Did you brought your notebook?', 'Did you bring your notebook?', 'Sau did dùng bring.'],
        ['He has bring some fruit for us.', 'He has brought some fruit for us.', 'Sau has dùng brought.'],
        ['Please bring back it tomorrow.', 'Please bring it back tomorrow.', 'Đại từ đứng giữa động từ và tiểu từ: bring it back.'],
        ['Can you take me a glass of water?', 'Can you bring me a glass of water?', 'Mang nước đến cho người đang nói: bring.'],
        ['I brought my passport to the airport tomorrow.', 'I will bring my passport to the airport tomorrow.', 'Tomorrow diễn tả tương lai; dùng will bring.']
      ],
      '10-get-got-got': [
        ['I getted tired after the long walk.', 'I got tired after the long walk.', 'Quá khứ của get là got.'],
        ['She get to work at eight every day.', 'She gets to work at eight every day.', 'She cần dạng hiện tại gets.'],
        ['Did they got home late?', 'Did they get home late?', 'Sau did dùng get.'],
        ['We have get the tickets already.', 'We have got the tickets already.', 'Sau have dùng got trong cách dùng của bài.'],
        ['I get to home at nine.', 'I get home at nine.', 'Không dùng to trước home.'],
        ['The weather gets cold yesterday.', 'The weather got cold yesterday.', 'Yesterday yêu cầu dạng quá khứ got.']
      ],
      '11-phrasal-verbs': [
        ['Please turn off it before you leave.', 'Please turn it off before you leave.', 'Với đại từ, đặt it giữa động từ và tiểu từ.'],
        ['I put on them before I went outside.', 'I put them on before I went outside.', 'Với đại từ, dùng put them on.'],
        ['She wake up at six every weekday.', 'She wakes up at six every weekday.', 'She cần wakes ở hiện tại đơn.'],
        ['He took off it as soon as he got home.', 'He took it off as soon as he got home.', 'Tân ngữ là đại từ đứng trước tiểu từ off.'],
        ['We looked the new word up it.', 'We looked the new word up.', 'Không lặp lại tân ngữ it sau cụm look the word up.'],
        ['Does your alarm goes off at seven?', 'Does your alarm go off at seven?', 'Sau does dùng go nguyên mẫu.']
      ],
      '12-everyday-things': [
        ['She get up at six on weekdays.', 'She gets up at six on weekdays.', 'She cần gets ở hiện tại đơn.'],
        ['I am usually wake up at seven.', 'I usually wake up at seven.', 'Thói quen dùng hiện tại đơn, không thêm am.'],
        ['Does he gets dressed quickly?', 'Does he get dressed quickly?', 'Sau does dùng get nguyên mẫu.'],
        ['They do the housework yesterday.', 'They did the housework yesterday.', 'Yesterday yêu cầu did.'],
        ['I go to home after work.', 'I go home after work.', 'Không dùng to trước home.'],
        ['He never is late for school.', 'He is never late for school.', 'Trạng từ tần suất đứng sau động từ be.']
      ],
      '13-talking': [
        ['She said me the good news.', 'She told me the good news.', 'Dùng tell somebody something.'],
        ['He told that he was tired.', 'He said that he was tired.', 'Dùng say that + mệnh đề; tell cần người nghe.'],
        ['I asked her help me with the form.', 'I asked her to help me with the form.', 'Cấu trúc là ask somebody to do something.'],
        ['She answered to my question quickly.', 'She answered my question quickly.', 'Answer đi trực tiếp với tân ngữ; reply to có to.'],
        ['The teacher said us a funny story.', 'The teacher told us a funny story.', 'Collocation là tell somebody a story.'],
        ['We speak about the plan yesterday.', 'We spoke about the plan yesterday.', 'Quá khứ của speak là spoke.']
      ],
      '14-moving': [
        ['She go to work by train every day.', 'She goes to work by train every day.', 'She cần goes ở hiện tại đơn.'],
        ['We catched the 8:10 bus.', 'We caught the 8:10 bus.', 'Quá khứ của catch là caught.'],
        ['I missed the train because I arrive late yesterday.', 'I missed the train because I arrived late yesterday.', 'Cả hai hành động trong câu đều ở quá khứ.'],
        ['The plane flied to Hanoi at noon.', 'The plane flew to Hanoi at noon.', 'Quá khứ của fly là flew.'],
        ['They arrived to the airport at six.', 'They arrived at the airport at six.', 'Dùng arrive at với địa điểm cụ thể.'],
        ['We arrived at Vietnam in the evening.', 'We arrived in Vietnam in the evening.', 'Dùng arrive in với thành phố hoặc quốc gia.']
      ]
    };

    var bank = [];
    var seenWords = Object.create(null);
    vocab.forEach(function (item) {
      if (!item || !item.word || !item.meaning) return;
      var key = String(item.word).toLowerCase();
      if (seenWords[key]) return;
      seenWords[key] = true;
      bank.push(item);
    });
    if (!bank.length) return;

    function take(source, start, count, keyFn) {
      var result = [];
      var seen = Object.create(null);
      if (!source || !source.length) return result;
      for (var step = 0; step < source.length && result.length < count; step += 1) {
        var item = source[(start + step) % source.length];
        var key = keyFn ? keyFn(item) : String(item && item.word || item);
        if (!item || seen[key]) continue;
        seen[key] = true;
        result.push(item);
      }
      return result;
    }

    function optionsFor(target, index, count) {
      var options = [target.word];
      take(bank.filter(function (item) { return String(item.word).toLowerCase() !== String(target.word).toLowerCase(); }), index * 3, count - 1)
        .forEach(function (item) { options.push(item.word); });
      var fallbacks = ['have breakfast', 'go home', 'do homework', 'take a photo', 'make a decision', 'come back'];
      fallbacks.forEach(function (item) { if (options.length < count && options.indexOf(item) === -1) options.push(item); });
      return options;
    }

    function mixOptions(options, index) {
      if (!options || options.length < 2) return options || [];
      var shift = index % options.length;
      return options.slice(shift).concat(options.slice(0, shift));
    }

    function imageBank() {
      var seen = Object.create(null);
      return bank.filter(function (item) {
        if (!item.image || seen[item.image]) return false;
        seen[item.image] = true;
        return true;
      });
    }

    function groupLabel(group) {
      var groupLabels = typeof GROUP_LABELS !== 'undefined' ? GROUP_LABELS : {};
      return groupLabels[group] || String(group || 'Khác').replace(/[-_]/g, ' ');
    }

    function createError(index) {
      var key = pageName;
      var seeds = errorBank[key] || errorBank[Object.keys(errorBank).filter(function (name) { return lessonKey.indexOf(name.replace(/-/g, '_')) !== -1; })[0]] || errorBank['07-come-came-come'];
      var seed = seeds[index % seeds.length];
      return {
        type: 'error-correction', category: category, difficulty: 2,
        prompt: 'Sửa câu sai: “' + seed[0] + '”', answer: [seed[1]], explanation: seed[2]
      };
    }

    function createQuestion(type, index, id) {
      var target = bank[index % bank.length];
      var other = bank[(index + 1) % bank.length];
      var groupBuckets = Object.create(null);
      bank.forEach(function (item) {
        var group = item.group || item.kind || 'other';
        if (!groupBuckets[group]) groupBuckets[group] = [];
        groupBuckets[group].push(item);
      });
      var groupKeys = Object.keys(groupBuckets);
      var common = { id: id, type: type, category: category, difficulty: (index % 3) + 1 };

      if (type === 'multiple-choice') return Object.assign({}, common, {
        prompt: 'Chọn cụm tiếng Anh đúng với nghĩa: “' + target.meaning + '”.',
        options: mixOptions(optionsFor(target, index, 4), index), answer: target.word,
        explanation: 'Cụm cần nhớ: ' + target.word + ' — ' + target.meaning + '.'
      });
      if (type === 'fill-blank') return Object.assign({}, common, {
        prompt: 'Tự nhớ và viết cụm tiếng Anh có nghĩa: “' + target.meaning + '”.', answer: target.word,
        explanation: target.word + ' = ' + target.meaning + '. Ví dụ: “' + (target.example || target.word) + '”'
      });
      if (type === 'word-bank') return Object.assign({}, common, {
        prompt: 'Chọn trong ngân hàng từ cụm có nghĩa: “' + target.meaning + '”.', bank: mixOptions(optionsFor(target, index + 2, 5), index + 1), answer: target.word,
        explanation: 'Đáp án: ' + target.word + ' — ' + target.meaning + '.'
      });
      if (type === 'matching') {
        var pairs = take(bank, index * 4, Math.min(4, bank.length));
        return Object.assign({}, common, {
          prompt: 'Nối từng cụm từ với nghĩa tiếng Việt tương ứng.',
          pairs: pairs.map(function (item) { return { left: item.word, right: item.meaning }; }),
          explanation: 'Đọc cả cụm từ và ghi nhớ nghĩa theo ngữ cảnh.'
        });
      }
      if (type === 'categorization') {
        var items = take(bank, index * 5, Math.min(5, bank.length)).map(function (item) {
          var group = item.group || item.kind || 'other';
          return { text: item.word, answer: groupLabel(group) };
        });
        var chosenGroups = items.map(function (item) { return item.answer; }).filter(function (group, position, list) { return list.indexOf(group) === position; });
        return Object.assign({}, common, {
          prompt: 'Phân loại từng từ / cụm vào nhóm từ vựng của bài.',
          categories: chosenGroups.map(groupLabel), items: items,
          explanation: 'Xếp cụm theo nhóm chủ đề hiển thị trong bảng từ vựng.'
        });
      }
      if (type === 'sentence-order') {
        var sentence = String(target.example || target.word).trim();
        var tokens = sentence.split(/\s+/).filter(Boolean);
        if (tokens.length < 3) tokens = ['I', 'often', target.word + '.'];
        var mixed = tokens.slice().reverse();
        if (mixed.join(' ') === tokens.join(' ')) mixed = tokens.slice(1).concat(tokens[0]);
        return Object.assign({}, common, {
          prompt: 'Sắp xếp các từ để tạo lại câu ví dụ hoàn chỉnh.', tokens: mixed, answer: tokens,
          explanation: 'Câu hoàn chỉnh: “' + sentence + '”'
        });
      }
      if (type === 'image-choice') {
        var pictured = imageBank();
        var imageTarget = pictured[index % Math.max(1, pictured.length)] || target;
        return Object.assign({}, common, {
          prompt: 'Quan sát hình và chọn cụm từ phù hợp nhất.', image: imageTarget.image,
          options: mixOptions(optionsFor(imageTarget, index + 1, 4), index + 2), answer: imageTarget.word,
          explanation: imageTarget.word + ' = ' + imageTarget.meaning + '.'
        });
      }
      if (type === 'image-match') {
        var picturedUnique = imageBank();
        var imageItems = take(picturedUnique, index * 3, Math.min(3, picturedUnique.length));
        return Object.assign({}, common, {
          prompt: 'Ghép từng hình với cụm từ đã học.',
          items: imageItems.map(function (item) { return { image: item.image, answer: item.word }; }),
          options: imageItems.map(function (item) { return item.word; }),
          explanation: 'Dựa vào chi tiết trong ảnh, sau đó kiểm tra lại nghĩa của từng cụm.'
        });
      }
      if (type === 'mini-reading') {
        var readingSet = take(bank, index * 3, Math.min(3, bank.length));
        var passage = readingSet.map(function (item, part) { return 'Example ' + String.fromCharCode(65 + part) + ': “' + (item.example || item.word) + '”'; }).join(' ');
        var readingTarget = readingSet[1] || readingSet[0] || target;
        return Object.assign({}, common, {
          passage: passage,
          prompt: 'Cụm từ mục tiêu nào xuất hiện trong Example B?',
          options: mixOptions(optionsFor(readingTarget, index + 3, 4), index + 1), answer: readingTarget.word,
          explanation: 'Example B là: “' + (readingTarget.example || readingTarget.word) + '”'
        });
      }
      if (type === 'true-false') {
        var isTrue = index % 2 === 0;
        var falseTarget = bank.filter(function (item) { return item.meaning !== target.meaning && item.word !== target.word; })[0] || other;
        var meaning = isTrue ? target.meaning : falseTarget.meaning;
        return Object.assign({}, common, {
          prompt: 'Đúng hay sai? “' + target.word + '” có nghĩa là “' + meaning + '”.',
          answer: isTrue ? 'true' : 'false',
          explanation: target.word + ' có nghĩa là “' + target.meaning + '”.'
        });
      }
      if (type === 'select-all') {
        var largestGroup = groupKeys.slice().sort(function (a, b) { return groupBuckets[b].length - groupBuckets[a].length; })[0];
        var matchingGroup = groupBuckets[largestGroup] || [target];
        var correctItems = take(matchingGroup, index, Math.min(3, matchingGroup.length));
        var wrongItems = take(bank.filter(function (item) { return (item.group || item.kind || 'other') !== largestGroup; }), index + 2, 3);
        var options = correctItems.concat(wrongItems).map(function (item) { return item.word; });
        return Object.assign({}, common, {
          prompt: 'Chọn tất cả cụm thuộc nhóm “' + groupLabel(largestGroup) + '”.',
          options: mixOptions(options, index), answer: correctItems.map(function (item) { return item.word; }),
          explanation: 'Các đáp án đúng đều nằm trong nhóm “' + groupLabel(largestGroup) + '”.'
        });
      }
      if (type === 'multi-fill') {
        var fillSet = take(bank, index * 5, Math.min(5, bank.length));
        return Object.assign({}, common, {
          prompt: 'Điền cụm từ phù hợp cho từng nghĩa. Hoàn thành tất cả các dòng rồi kiểm tra.',
          items: fillSet.map(function (item, number) { return { text: (number + 1) + '. “' + item.meaning + '” → ______', answer: item.word }; }),
          explanation: 'Ôn theo chiều nghĩa tiếng Việt → cụm tiếng Anh để luyện nhớ chủ động.'
        });
      }
      if (type === 'short-answer') return Object.assign({}, common, {
        prompt: 'Tự viết một câu tiếng Anh mới, tối thiểu 8 từ, cho thấy bạn hiểu cách dùng “' + target.word + '”. Không chép nguyên câu mẫu.',
        rubric: ['Viết ít nhất 8 từ và đủ chủ ngữ – động từ.', 'Dùng đúng cụm “' + target.word + '”.', 'Ngữ cảnh thể hiện đúng nghĩa: ' + target.meaning + '.'],
        explanation: 'Đây là câu trả lời mở. Dùng rubric để tự rà nghĩa, trật tự từ và chính tả.'
      });
      if (type === 'production') return Object.assign({}, common, {
        prompt: 'Nhiệm vụ nói / viết: tạo đoạn hội thoại 3 lượt có dùng tự nhiên cụm “' + target.word + '”. Sau đó đọc thành tiếng một lần.',
        rubric: ['Có đủ 3 lượt lời hoặc 3 câu liên kết.', 'Dùng đúng cụm “' + target.word + '”.', 'Ngữ cảnh tự nhiên và đúng nghĩa.', 'Đọc lại thành tiếng, sửa ít nhất một điểm nếu cần.'],
        explanation: 'Bài tạo ngôn ngữ được tự đánh giá bằng rubric; hãy ưu tiên câu có nghĩa rõ.'
      });
      if (type === 'error-correction') return Object.assign({}, common, createError(index));
      if (type === 'cloze') {
        var example = String(target.example || '');
        var pos = example.toLowerCase().indexOf(String(target.word).toLowerCase());
        var masked = pos >= 0 ? example.slice(0, pos) + '{1}' + example.slice(pos + String(target.word).length) : 'Nghĩa “' + target.meaning + '” được diễn đạt bằng cụm: {1}';
        return Object.assign({}, common, {
          prompt: 'Điền cụm từ còn thiếu theo nghĩa và ví dụ.', text: masked,
          blanks: [{ options: mixOptions(optionsFor(target, index + 4, 4), index + 3), answer: target.word }],
          explanation: target.word + ' = ' + target.meaning + '.'
        });
      }
      return null;
    }

    var practiceTypes = [
      'multiple-choice', 'fill-blank', 'word-bank', 'matching', 'categorization',
      'sentence-order', 'image-choice', 'image-match', 'mini-reading', 'true-false',
      'select-all', 'multi-fill', 'short-answer', 'production', 'error-correction'
    ];
    if (practiceQuestions.some(function (question) { return question.type === 'cloze'; })) practiceTypes.push('cloze');

    practiceTypes.forEach(function (type) {
      var current = practiceQuestions.filter(function (question) { return question.type === type; }).length;
      for (var n = current; n < TARGET_PER_TYPE; n += 1) {
        var id = 'std-p-' + type.replace(/[^a-z0-9]+/gi, '-') + '-' + (n + 1);
        var question = createQuestion(type, n, id);
        if (question) practiceQuestions.push(question);
      }
    });

    var practiceFilter = document.getElementById('practice-category-filter');
    if (practiceFilter && !Array.from(practiceFilter.options).some(function (option) { return option.value === category; })) {
      var fullBankOption = document.createElement('option');
      fullBankOption.value = category;
      fullBankOption.textContent = 'Bộ câu hỏi mở rộng';
      practiceFilter.appendChild(fullBankOption);
    }

    var examTypes = ['multiple-choice', 'fill-blank', 'matching', 'mini-reading', 'error-correction', 'sentence-order'];
    examTypes.forEach(function (type) {
      for (var n = 0; n < EXAM_PER_TYPE; n += 1) {
        var question = createQuestion(type, n + 7, 'std-t-' + type.replace(/[^a-z0-9]+/gi, '-') + '-' + (n + 1));
        if (question) {
          question.category = 'final-challenge';
          testQuestions.push(question);
        }
      }
    });

    if (typeof setupPracticeTypeFilter === 'function') setupPracticeTypeFilter();

    var exerciseCatalog = null;
    var exerciseSession = null;
    var exerciseSessionTitle = null;
    var exerciseSessionCount = null;
    var activeExerciseType = null;
    var practiceToolbar = null;
    var practiceSummary = null;
    var practiceList = null;
    var practicePaginationTop = null;
    var practicePaginationBottom = null;
    var practiceRetryBanner = null;
    var coverageBanner = null;

    function setExerciseMode(type) {
      var typeSelect = document.getElementById('practice-type-filter');
      var categorySelect = document.getElementById('practice-category-filter');
      var levelSelect = document.getElementById('practice-level-filter');
      var isCatalog = !type;
      activeExerciseType = type || null;

      if (exerciseCatalog) exerciseCatalog.hidden = !isCatalog;
      if (exerciseSession) exerciseSession.hidden = isCatalog;
      if (coverageBanner) coverageBanner.hidden = !isCatalog;
      [practiceToolbar, practiceSummary, practiceList, practicePaginationTop, practicePaginationBottom, practiceRetryBanner]
        .forEach(function (element) { if (element) element.hidden = isCatalog; });

      state.retryIds = null;
      if (isCatalog) {
        practiceTypeFilter = 'all';
        if (typeSelect) typeSelect.value = 'all';
        renderPractice();
        return;
      }

      var selectedCount = practiceQuestions.filter(function (question) { return question.type === type; }).length;
      if (exerciseSessionTitle) exerciseSessionTitle.textContent = 'Bài ' + String(practiceTypes.indexOf(type) + 1).padStart(2, '0') + ' · ' + (labels[type] || type);
      if (exerciseSessionCount) exerciseSessionCount.textContent = selectedCount + ' câu trong bài này';
      if (categorySelect && categorySelect.value !== 'all') {
        categorySelect.value = 'all';
        categorySelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (levelSelect && levelSelect.value !== 'all') {
        levelSelect.value = 'all';
        levelSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
      if (typeSelect) {
        typeSelect.value = type;
        typeSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    function installExerciseCatalog() {
      if (!practiceView || document.getElementById('evu-exercise-catalog')) return;
      practiceToolbar = practiceView.querySelector('.practice-toolbar');
      practiceSummary = practiceView.querySelector('.practice-summary');
      practiceList = document.getElementById('practice-list');
      practicePaginationTop = document.getElementById('practice-pagination-top');
      practicePaginationBottom = document.getElementById('practice-pagination-bottom');
      practiceRetryBanner = document.getElementById('retry-banner');
      coverageBanner = document.getElementById('evu-coverage-banner');

      exerciseCatalog = document.createElement('section');
      exerciseCatalog.id = 'evu-exercise-catalog';
      exerciseCatalog.className = 'evu-exercise-catalog';
      var cards = practiceTypes.map(function (type, index) {
        var count = practiceQuestions.filter(function (question) { return question.type === type; }).length;
        if (!count) return '';
        return '<article class="evu-exercise-card"><div class="evu-exercise-card-top"><span>BÀI ' + String(index + 1).padStart(2, '0') + '</span><b>' + count + '</b></div><h3>' + (labels[type] || type) + '</h3><p>Bộ câu hỏi chỉ gồm dạng ' + (labels[type] || type).toLowerCase() + '.</p><button class="btn primary" type="button" data-evu-open-type="' + type + '">Vào bài luyện →</button></article>';
      }).join('');
      exerciseCatalog.innerHTML = '<div class="evu-exercise-heading"><div><span class="evu-eyebrow">CHỌN BÀI LUYỆN</span><h2>Mỗi bài một dạng</h2><p>Chọn một dạng để làm trọn bộ câu hỏi cùng kiểu. Các dạng được tách riêng, không trộn trong bài luyện.</p></div><span class="evu-exercise-count">' + practiceTypes.length + ' bài riêng</span></div><div class="evu-exercise-grid">' + cards + '</div>';

      exerciseSession = document.createElement('div');
      exerciseSession.id = 'evu-exercise-session';
      exerciseSession.className = 'evu-exercise-session';
      exerciseSession.hidden = true;
      exerciseSession.innerHTML = '<button type="button" class="btn secondary" id="evu-back-to-exercise-catalog">← Danh sách dạng bài</button><div><strong id="evu-exercise-session-title"></strong><span id="evu-exercise-session-count"></span></div>';
      exerciseSessionTitle = exerciseSession.querySelector('#evu-exercise-session-title');
      exerciseSessionCount = exerciseSession.querySelector('#evu-exercise-session-count');

      var typeControl = document.getElementById('practice-type-filter');
      if (typeControl && typeControl.closest('label')) typeControl.closest('label').hidden = true;
      var anchor = practiceSummary || practiceToolbar || practiceView.querySelector('.section-heading');
      if (anchor) {
        practiceView.insertBefore(exerciseCatalog, anchor);
        practiceView.insertBefore(exerciseSession, anchor);
      } else {
        practiceView.appendChild(exerciseCatalog);
        practiceView.appendChild(exerciseSession);
      }

      exerciseCatalog.addEventListener('click', function (event) {
        var button = event.target.closest('[data-evu-open-type]');
        if (!button) return;
        setExerciseMode(button.getAttribute('data-evu-open-type'));
        if (practiceList) practiceList.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      exerciseSession.querySelector('#evu-back-to-exercise-catalog').addEventListener('click', function () {
        setExerciseMode(null);
      });
      setExerciseMode(null);
    }

    function textNodeIn(element) {
      if (!element) return null;
      for (var i = 0; i < element.childNodes.length; i += 1) {
        if (element.childNodes[i].nodeType === 3 && element.childNodes[i].nodeValue.trim()) return element.childNodes[i];
      }
      return null;
    }

    var navLabels = {
      overview: 'Tổng quan', learn: 'Bài học', vocabulary: 'Từ vựng', flashcards: 'Thẻ ghi nhớ',
      story: 'Truyện & nghe', review: 'Ôn cách quãng', practice: 'Luyện tập', test: 'Đề thi thử',
      mistakes: 'Câu cần sửa', results: 'Kết quả'
    };
    document.querySelectorAll('.mobile-nav button[data-view], .nav-button[data-view]').forEach(function (button) {
      var label = navLabels[button.getAttribute('data-view')];
      if (!label) return;
      if (button.classList.contains('nav-button')) {
        var labelElement = button.querySelector('.nav-icon + span');
        var node = textNodeIn(labelElement);
        if (node) node.nodeValue = label + ' ';
      } else {
        var mobileLabel = null;
        for (var i = 0; i < button.childNodes.length; i += 1) {
          if (button.childNodes[i].nodeType === 3 && button.childNodes[i].nodeValue.trim()) { mobileLabel = button.childNodes[i]; break; }
        }
        if (mobileLabel) mobileLabel.nodeValue = ' ' + label;
      }
    });

    var sidebar = document.querySelector('.sidebar');
    if (sidebar && !document.getElementById('evu-unit-home')) {
      var homeLink = document.createElement('a');
      homeLink.id = 'evu-unit-home';
      homeLink.className = 'evu-unit-home';
      homeLink.href = 'index.html';
      homeLink.textContent = '← Mục lục Everyday Verbs';
      var navCard = sidebar.querySelector('.nav-card');
      sidebar.insertBefore(homeLink, navCard || sidebar.firstChild);
    }

    var practiceView = document.getElementById('view-practice');
    if (practiceView && !document.getElementById('evu-coverage-banner')) {
      var counts = Object.create(null);
      practiceQuestions.forEach(function (question) { counts[question.type] = (counts[question.type] || 0) + 1; });
      var chips = Object.keys(counts).sort().map(function (type) {
        var label = labels[type] || type;
        return '<span class="evu-type-chip"><b>' + counts[type] + '</b> ' + label + '</span>';
      }).join('');
      var banner = document.createElement('div');
      banner.id = 'evu-coverage-banner';
      banner.className = 'evu-coverage-banner';
      banner.innerHTML = '<div class="evu-banner-top"><div><span class="evu-eyebrow">EVERYDAY VERBS · PRACTICE LAB</span><h2>Đủ dạng, đủ lượt luyện</h2><p>Ngân hàng được cân bằng để mỗi dạng có ít nhất ' + TARGET_PER_TYPE + ' câu; đi từ nhận diện đến tự dùng từ trong câu.</p></div><div class="evu-total"><strong>' + practiceQuestions.length + '</strong><span>câu luyện tập</span></div></div><div class="evu-type-matrix">' + chips + '</div>';
      var summary = practiceView.querySelector('.practice-summary');
      if (summary) practiceView.insertBefore(banner, summary);
      else if (practiceView.querySelector('.section-heading')) practiceView.querySelector('.section-heading').insertAdjacentElement('afterend', banner);
    }
    installExerciseCatalog();

    var testView = document.getElementById('view-test');
    if (testView && !document.getElementById('evu-exam-banner')) {
      var examBanner = document.createElement('div');
      examBanner.id = 'evu-exam-banner';
      examBanner.className = 'evu-exam-banner';
      examBanner.innerHTML = '<div class="evu-exam-copy"><span class="evu-eyebrow">FINAL BOSS · EVERYDAY VERBS</span><h2>Thử thách cuối chặng</h2><p>Đề trộn nhiều dạng, mỗi câu có giải thích sau khi nộp. Bài gốc được mở rộng thêm ' + (EXAM_PER_TYPE * 6) + ' nhiệm vụ có chấm điểm.</p><div class="evu-exam-tags"><span>✦ 6 chặng kỹ năng</span><span>✓ Tự chấm và xem lỗi</span><span>↻ Có thể làm lại</span></div></div><div class="evu-clock-card"><span>Đồng hồ tùy chọn</span><strong id="evu-clock">60:00</strong><button type="button" class="btn primary" id="evu-clock-start">Bắt đầu 60 phút</button><small id="evu-clock-note">Bạn có thể làm không giới hạn thời gian.</small></div>';
      var testInstructions = testView.querySelector('.test-instructions');
      if (testInstructions) testView.insertBefore(examBanner, testInstructions);
      else if (testView.querySelector('.section-heading')) testView.querySelector('.section-heading').insertAdjacentElement('afterend', examBanner);
    }

    var practiceTitle = document.getElementById('practice-title');
    if (practiceTitle) practiceTitle.textContent = 'Đấu trường luyện tập';
    var testTitle = document.getElementById('test-title');
    if (testTitle) testTitle.textContent = 'Đề thi tổng hợp';
    if (document.title.indexOf('Learning Activity') !== -1) document.title = document.title.replace('Learning Activity', 'Everyday Verbs · Learning Lab');
    var testKicker = testView && testView.querySelector('.section-kicker');
    if (testKicker) testKicker.textContent = '08 · FINAL BOSS';

    var clockButton = document.getElementById('evu-clock-start');
    if (clockButton) {
      var remaining = 60 * 60;
      var interval = null;
      var clock = document.getElementById('evu-clock');
      var note = document.getElementById('evu-clock-note');
      var form = document.getElementById('test-form');
      function drawClock() {
        if (clock) clock.textContent = String(Math.floor(remaining / 60)).padStart(2, '0') + ':' + String(remaining % 60).padStart(2, '0');
      }
      clockButton.addEventListener('click', function () {
        if (interval) return;
        clockButton.disabled = true;
        clockButton.textContent = 'Đang tính giờ';
        if (note) note.textContent = 'Khi hết giờ, bài sẽ được nộp tự động.';
        interval = window.setInterval(function () {
          remaining -= 1;
          drawClock();
          if (remaining <= 0) {
            window.clearInterval(interval);
            interval = null;
            if (form && typeof form.requestSubmit === 'function') form.requestSubmit();
            else if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
          }
        }, 1000);
      });
      if (form) form.addEventListener('submit', function () {
        if (interval) window.clearInterval(interval);
        interval = null;
      });
    }

    if (typeof renderPractice === 'function') renderPractice();
    if (typeof renderTest === 'function') renderTest();
    if (typeof updateProgress === 'function') updateProgress();
  } catch (error) {
    console.error('Everyday Verbs standard setup could not finish.', error);
  }
})();
