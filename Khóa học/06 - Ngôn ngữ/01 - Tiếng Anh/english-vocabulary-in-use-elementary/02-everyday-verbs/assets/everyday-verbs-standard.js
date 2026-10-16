(function () {
  'use strict';

  try {
    if (!Array.isArray(vocab) || !Array.isArray(practiceQuestions) || !Array.isArray(testQuestions)) return;

    var TARGET_PER_TYPE = 15;
    var EXAM_PER_TYPE = 4;
    var MAX_GROUP_ITEMS = 10;
    var CURATION_LIMITS = {
      'multiple-choice': 6,
      'image-choice': 4,
      'image-to-word': 4,
      'true-false': 4,
      'image-match': 4,
      'fill-blank': 6,
      'word-bank': 5,
      'matching': 4,
      'categorization': 4,
      'sentence-completion': 6,
      'sentence-complete': 6,
      'sentence-order': 5,
      'multi-fill': 4,
      'mini-reading': 4,
      'paragraph-completion': 4,
      'paragraph-cloze': 4,
      'passage-complete': 4,
      'reading-tfng': 6,
      'select-all': 4,
      'error-correction': 5,
      'translation': 4,
      'short-answer': 2,
      'production': 2
    };
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
      'translation': 'Dịch câu',
      'production': 'Viết / nói ứng dụng',
      'error-correction': 'Sửa lỗi',
      'sentence-completion': 'Hoàn thiện câu',
      'sentence-complete': 'Hoàn thiện câu',
      'image-to-word': 'Từ qua hình',
      'paragraph-completion': 'Hoàn thiện đoạn văn',
      'paragraph-cloze': 'Hoàn thiện đoạn văn',
      'passage-complete': 'Hoàn thiện đoạn văn',
      'reading-tfng': 'Đọc hiểu T / F / NG'
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
    var advancedLesson = window.EVU_ADVANCED_BANK && window.EVU_ADVANCED_BANK[pageName];

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

    function sentenceDifficulty(index) {
      if (index < 5) return 1;
      if (index < 10) return 2;
      return 3;
    }

    function maskTargetExample(target) {
      var example = String(target.example || '');
      var phrase = String(target.word || '');
      var at = example.toLowerCase().indexOf(phrase.toLowerCase());
      if (at >= 0) return example.slice(0, at) + '________' + example.slice(at + phrase.length);
      return example || 'Use the correct phrase: ________';
    }

    function practiceSentence(target, index, frameOffset) {
      var frame = (index + (frameOffset || 0)) % 4;
      var base = String(target.word || '').trim();
      var lower = base.toLowerCase();
      var usedForm = practiceForm(target, index, frameOffset);
      var generatedComplements = {
        have: ' breakfast', go: ' to work', do: ' my homework', make: ' the bed', come: ' home',
        take: ' the bus', bring: ' the book', get: ' home', wake: ' up', turn: ' on the light',
        put: ' on my coat', look: ' at the picture', pick: ' up my bag', say: ' hello',
        tell: ' my friend the news', speak: ' English', talk: ' to my friend', answer: ' the question',
        reply: ' to the message', spell: ' the word', pronounce: ' the word', catch: ' the bus',
        fly: ' to London', leave: ' home', run: ' in the park', drive: ' to work', ride: ' a bike',
        write: ' a message', buy: ' some food', think: ' about the plan', teach: ' English',
        hear: ' the news', meet: ' my friend', sleep: ' well', sit: ' in the garden', stand: ' near the door',
        walk: ' to work', jump: ' over the line', dance: ' at the party', jog: ' in the park', swim: ' in the pool',
        climb: ' the stairs', fall: ' asleep', miss: ' the bus', arrive: ' at work', push: ' the door',
        pull: ' the handle', carry: ' the bag', pass: ' the book', ask: ' a question', listen: ' to music',
        call: ' my friend', phone: ' my friend', watch: ' TV', wash: ' the dishes', clean: ' the room',
        brush: ' my teeth', study: ' English', work: ' at home', finish: ' my homework', rest: ' after lunch',
        travel: ' by train', shop: ' for food', visit: ' my family', bake: ' a cake', cook: ' dinner',
        open: ' the door', change: ' my clothes'
      };
      var complement = generatedComplements[lower] || '';
      if (/^(turn off|turn on)$/i.test(lower)) complement = ' the lights';
      else if (/^(put on|take off)$/i.test(lower)) complement = ' my coat';
      else if (/^bring back$/i.test(lower)) complement = ' the library book';
      else if (/^pick up$/i.test(lower)) complement = ' my sister';
      else if (/^look up$/i.test(lower)) complement = ' the new word';
      else if (/^(get on|get off)$/i.test(lower)) complement = ' the bus';
      else if (/^have got$/i.test(lower)) complement = ' a new key';
      else if (/^have to$/i.test(lower)) complement = ' leave early';
      if (frame === 0) return 'I usually ' + usedForm + complement + ' before I start work.';
      if (frame === 1) return 'Yesterday, we ' + usedForm + complement + ' after the meeting.';
      if (frame === 2) return 'She ' + usedForm + complement + ' every weekday.';
      if (/^have to$/i.test(lower)) return 'Do you have to' + complement + ' before dinner?';
      return 'Can you ' + base + complement + ' before dinner?';
    }

    function practiceForm(target, index, frameOffset) {
      var frame = (index + (frameOffset || 0)) % 4;
      var base = String(target.word || '').trim();
      if (frame === 1) return inflectPhrase(base, 'past');
      if (frame === 2) return inflectPhrase(base, 'third');
      return base;
    }

    function contextualFormOptions(target, index, frameOffset, count) {
      var base = String(target.word || '').trim();
      var candidates = [
        practiceForm(target, index, frameOffset),
        base,
        inflectPhrase(base, 'third'),
        inflectPhrase(base, 'past')
      ];
      if (/^have$/i.test(base)) candidates.push('have to');
      if (/\s/.test(base) && !/\bto$|\bby$|\bwith$|\bfor$/.test(base)) {
        var head = base.split(/\s+/)[0].toLowerCase();
        bank.filter(function (item) {
          var word = String(item.word || '').trim();
          return word && word.toLowerCase() !== base.toLowerCase()
            && word.toLowerCase().indexOf(head + ' ') === 0
            && !/[()\/+!]/.test(word);
        }).forEach(function (item) { candidates.push(item.word); });
      }
      var options = [];
      candidates.forEach(function (candidate) {
        var key = normalizeExerciseText(candidate);
        if (key && options.every(function (current) { return normalizeExerciseText(current) !== key; })) options.push(candidate);
      });
      return mixOptions(options.slice(0, count), index);
    }

    function maskPhrase(sentence, phrase) {
      var at = sentence.toLowerCase().indexOf(String(phrase || '').toLowerCase());
      return at < 0 ? sentence : sentence.slice(0, at) + '________' + sentence.slice(at + String(phrase).length);
    }

    function inflectPhrase(phrase, form) {
      var parts = String(phrase || '').split(/\s+/);
      var root = parts.shift() || '';
      var irregular = {
        have: { past: 'had', third: 'has' }, go: { past: 'went', third: 'goes' },
        do: { past: 'did', third: 'does' }, make: { past: 'made', third: 'makes' },
        come: { past: 'came', third: 'comes' }, take: { past: 'took', third: 'takes' },
        bring: { past: 'brought', third: 'brings' }, get: { past: 'got', third: 'gets' },
        say: { past: 'said', third: 'says' }, tell: { past: 'told', third: 'tells' },
        speak: { past: 'spoke', third: 'speaks' }, catch: { past: 'caught', third: 'catches' },
        fly: { past: 'flew', third: 'flies' }, leave: { past: 'left', third: 'leaves' },
        wake: { past: 'woke', third: 'wakes' }, put: { past: 'put', third: 'puts' },
        read: { past: 'read', third: 'reads' }, run: { past: 'ran', third: 'runs' },
        drive: { past: 'drove', third: 'drives' }, ride: { past: 'rode', third: 'rides' },
        write: { past: 'wrote', third: 'writes' }, buy: { past: 'bought', third: 'buys' },
        think: { past: 'thought', third: 'thinks' }, teach: { past: 'taught', third: 'teaches' },
        hear: { past: 'heard', third: 'hears' }, meet: { past: 'met', third: 'meets' },
        sleep: { past: 'slept', third: 'sleeps' }, sit: { past: 'sat', third: 'sits' },
        stand: { past: 'stood', third: 'stands' }, swim: { past: 'swam', third: 'swims' },
        fall: { past: 'fell', third: 'falls' }
      };
      var next = root;
      if (irregular[root] && irregular[root][form]) next = irregular[root][form];
      else if (form === 'past') {
        if (/[^aeiou]y$/i.test(root)) next = root.slice(0, -1) + 'ied';
        else if (/e$/i.test(root)) next = root + 'd';
        else if (/^(stop|plan|drop|shop|chat|rub|hug|clap|travel|occur)$/i.test(root)) next = root + root.slice(-1) + 'ed';
        else next = root + 'ed';
      } else if (form === 'third') {
        if (/[^aeiou]y$/i.test(root)) next = root.slice(0, -1) + 'ies';
        else if (/(s|sh|ch|x|o)$/i.test(root)) next = root + 'es';
        else next = root + 's';
      }
      return [next].concat(parts).join(' ');
    }

    function normalizeExerciseText(value) {
      return String(value == null ? '' : value)
        .toLowerCase()
        .replace(/[“”\"]/g, '')
        .replace(/(^|\s)[ab]\s*:\s*/g, '$1')
        .replace(/\[\[?\d+\]?\]|\{\d+\}/g, ' ____ ')
        .replace(/\[\d+\]/g, ' ____ ')
        .replace(/_{2,}/g, ' ____ ')
        .replace(/[.!?,;:]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function promptSentenceText(prompt) {
      var text = String(prompt || '');
      var colon = text.lastIndexOf(':');
      return colon >= 0 ? text.slice(colon + 1) : text;
    }

    function sentenceAnswerText(question) {
      var answer = question && question.answer;
      if (Array.isArray(answer)) return String(answer[0] == null ? '' : answer[0]);
      return String(answer == null ? '' : answer);
    }

    function sentenceSource(question) {
      if (!question) return '';
      if (['sentence-completion', 'sentence-complete'].indexOf(question.type) !== -1) return question.passage || question.sentence || question.prompt;
      if (question.type === 'sentence-order' && Array.isArray(question.answer)) return question.answer.join(' ');
      if (['fill-blank', 'word-bank', 'multiple-choice', 'image-to-word'].indexOf(question.type) !== -1) {
        return question.sentence || question.passage || promptSentenceText(question.prompt);
      }
      return '';
    }

    function canonicalSentenceText(question) {
      var raw = String(sentenceSource(question) || '');
      if (!raw) return '';
      var hasGap = /_{2,}|\[\d+\]|____/.test(raw);
      if (question.type !== 'sentence-order' && !hasGap) return '';

      var text = normalizeExerciseText(raw);
      if (question.type === 'sentence-order') return sentenceShape(text, question);

      var answer = normalizeExerciseText(sentenceAnswerText(question));
      if (answer && /____/.test(text)) text = text.replace(/____/g, answer);
      if (answer) {
        var escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
        text = text.replace(new RegExp('(^|\\s)' + escaped + '(?=\\s|$)', 'gi'), '$1____');
      }
      return sentenceShape(text, question).replace(/\s+/g, ' ').trim();
    }

    function questionVocabItem(question) {
      var vocabId = String(question && question.vocabId || '').toLowerCase();
      if (!vocabId) return null;
      return bank.find(function (item) { return String(item.id || '').toLowerCase() === vocabId; }) || null;
    }

    function sentenceShape(value, question) {
      var text = normalizeExerciseText(value);
      var target = questionVocabItem(question);
      if (!target || !target.word) return text;
      var forms = [target.word, inflectPhrase(target.word, 'past'), inflectPhrase(target.word, 'third')]
        .filter(function (form, index, list) { return form && list.indexOf(form) === index; })
        .sort(function (left, right) { return right.length - left.length; });
      forms.forEach(function (form) {
        var escaped = String(form).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        text = text.replace(new RegExp('(^|\\s)' + escaped + '(?=\\s|$)', 'gi'), '$1____');
      });
      return text.replace(/\s+/g, ' ').trim();
    }

    function sentenceQuestionKey(question) {
      if (!question) return '';
      if (['sentence-completion', 'sentence-complete', 'sentence-order', 'fill-blank', 'word-bank', 'multiple-choice', 'image-to-word'].indexOf(question.type) !== -1) {
        var canonical = canonicalSentenceText(question);
        if (canonical) return 'sentence|' + canonical;
      }
      if (question.type === 'image-choice' || question.type === 'image-to-word') {
        var image = String(question.image || '').trim();
        return image ? 'image|' + normalizeExerciseText(image) + '|' + normalizeExerciseText(question.answer) : '';
      }
      if (question.type === 'error-correction') {
        var errorSource = question.wrong || question.sentence || promptSentenceText(question.prompt);
        return errorSource ? 'sentence|' + normalizeExerciseText(errorSource) : '';
      }
      return '';
    }

    function paragraphQuestionKey(question) {
      var source = String(question && question.passage || '');
      if (!source && question && Array.isArray(question.items)) source = question.items.map(function (item) { return item.text; }).join('. ');
      return source.split(/[.!?]+\s*/)
        .map(function (sentence) { return normalizeExerciseText(sentence); })
        .filter(Boolean)
        .sort()
        .join('|');
    }

    function generatedCompoundItem(cursor) {
      var position = Math.max(0, Number(cursor) || 0);
      var target = bank[Math.floor(position / 4) % bank.length];
      var frame = position % 4;
      var answer = practiceForm(target, frame, 0);
      var sentence = practiceSentence(target, frame, 0);
      var contexts = [
        'at home', 'with my friends', 'in the kitchen', 'at the office',
        'with my family', 'on the bus', 'in the morning', 'at the party',
        'during the trip', 'before bed', 'after school', 'at the café',
        'in the evening', 'on Saturdays', 'with our guests', 'at the weekend'
      ];
      var context = contexts[Math.floor(position / 4) % contexts.length];
      var punctuation = /[.!?]$/.test(sentence) ? sentence.slice(-1) : '';
      sentence = (punctuation ? sentence.slice(0, -1) : sentence) + ' ' + context + punctuation;
      return { text: maskPhrase(sentence, answer), answer: answer, source: target.id };
    }

    function compactCompoundQuestions(questions) {
      var usedCompoundLines = Object.create(null);
      var paragraphSeen = Object.create(null);
      var compoundKeys = Object.create(null);
      var paragraphTypes = ['paragraph-completion', 'paragraph-cloze', 'passage-complete'];

      return questions.filter(function (question, questionIndex) {
        if (paragraphTypes.indexOf(question.type) !== -1) {
          var paragraphKey = paragraphQuestionKey(question);
          if (paragraphKey && paragraphSeen[paragraphKey]) return false;
          if (paragraphKey) paragraphSeen[paragraphKey] = true;
          return true;
        }
        if (question.type !== 'multi-fill' || !Array.isArray(question.items)) return true;

        var localLines = Object.create(null);
        var compacted = [];
        question.items.forEach(function (item, slot) {
          var current = item;
          var key = normalizeExerciseText(current && current.text);
          var mustReplace = !key || localLines[key] || usedCompoundLines[key];
          var replacementFound = !mustReplace;
          if (mustReplace) {
            for (var attempt = 0; attempt < bank.length * 8; attempt += 1) {
              var candidate = generatedCompoundItem(questionIndex * 4 + slot + attempt);
              var candidateKey = normalizeExerciseText(candidate.text);
              if (candidateKey && !localLines[candidateKey] && !usedCompoundLines[candidateKey]) {
                current = candidate;
                key = candidateKey;
                replacementFound = true;
                break;
              }
            }
          }
          if (!replacementFound || !key || localLines[key]) return;
          localLines[key] = true;
          usedCompoundLines[key] = true;
          compacted.push(current);
        });

        if (!compacted.length) return false;
        question.items = compacted;
        var compoundKey = question.items.map(function (item) { return normalizeExerciseText(item.text); }).sort().join('|');
        if (compoundKey && compoundKeys[compoundKey]) return false;
        if (compoundKey) compoundKeys[compoundKey] = true;
        return true;
      });
    }

    function categorizationGroupKey(question) {
      if (!question || question.type !== 'categorization' || !Array.isArray(question.categories) || !question.categories.length) return '';
      return question.categories.map(function (category) {
        return normalizeExerciseText(category);
      }).filter(Boolean).sort().join('|');
    }

    function mergeCategorizationQuestions(questions) {
      var groups = Object.create(null);
      var kept = [];

      questions.forEach(function (question) {
        var groupKey = categorizationGroupKey(question);
        if (!groupKey) {
          kept.push(question);
          return;
        }

        if (!groups[groupKey]) {
          var initialItems = Object.create(null);
          var initialList = [];
          (Array.isArray(question.items) ? question.items : []).forEach(function (item) {
            var initialKey = normalizeExerciseText(item && item.text);
            if (initialKey && !initialItems[initialKey]) {
              initialItems[initialKey] = true;
              initialList.push(item);
            }
          });
          question.items = initialList;
          groups[groupKey] = { question: question, items: initialItems };
          kept.push(question);
          return;
        }

        var group = groups[groupKey];
        if (!Array.isArray(group.question.items)) group.question.items = [];
        (Array.isArray(question.items) ? question.items : []).forEach(function (item) {
          var itemKey = normalizeExerciseText(item && item.text);
          if (!itemKey || group.items[itemKey]) return;
          group.items[itemKey] = true;
          group.question.items.push(item);
        });
      });

      return kept.filter(function (question) {
        return question.type !== 'categorization' || (Array.isArray(question.items) && question.items.length);
      });
    }

    function repeatedGroupQuestionKey(question) {
      if (!question || ['matching', 'image-match'].indexOf(question.type) === -1) return '';
      var prompt = normalizeExerciseText(question.prompt);
      var categoryName = normalizeExerciseText(question.category);
      if (question.type === 'image-match') return question.type + '|' + categoryName;
      return prompt ? question.type + '|' + categoryName + '|' + prompt : '';
    }

    function mergeRepeatedGroupQuestions(questions) {
      var groups = Object.create(null);
      var kept = [];

      questions.forEach(function (question) {
        var groupKey = repeatedGroupQuestionKey(question);
        if (!groupKey) {
          kept.push(question);
          return;
        }

        if (!groups[groupKey]) {
          if (question.type === 'matching') {
            var pairSeen = Object.create(null);
            var pairs = [];
            (Array.isArray(question.pairs) ? question.pairs : []).forEach(function (pair) {
              var pairKey = normalizeExerciseText(pair && pair.left);
              if (pairKey && !pairSeen[pairKey]) {
                pairSeen[pairKey] = true;
                pairs.push(pair);
              }
            });
            question.pairs = pairs;
            groups[groupKey] = { question: question, entries: pairSeen };
          } else {
            var imageSeen = Object.create(null);
            var imageItems = [];
            var imageOptions = [];
            (Array.isArray(question.items) ? question.items : []).forEach(function (item) {
              var imageKey = normalizeExerciseText(item && item.image);
              if (imageKey && !imageSeen[imageKey]) {
                imageSeen[imageKey] = true;
                imageItems.push(item);
              }
            });
            (Array.isArray(question.options) ? question.options : []).forEach(function (option) {
              var optionKey = normalizeExerciseText(option);
              if (optionKey && imageOptions.every(function (current) { return normalizeExerciseText(current) !== optionKey; })) imageOptions.push(option);
            });
            imageItems.forEach(function (item) {
              var answerKey = normalizeExerciseText(item && item.answer);
              if (answerKey && imageOptions.every(function (current) { return normalizeExerciseText(current) !== answerKey; })) imageOptions.push(item.answer);
            });
            question.items = imageItems;
            question.options = imageOptions;
            groups[groupKey] = { question: question, entries: imageSeen, options: imageOptions };
          }
          kept.push(question);
          return;
        }

        var group = groups[groupKey];
        if (question.type === 'matching') {
          (Array.isArray(question.pairs) ? question.pairs : []).forEach(function (pair) {
            var pairKey = normalizeExerciseText(pair && pair.left);
            if (!pairKey || group.entries[pairKey]) return;
            group.entries[pairKey] = true;
            group.question.pairs.push(pair);
          });
        } else {
          (Array.isArray(question.items) ? question.items : []).forEach(function (item) {
            var imageKey = normalizeExerciseText(item && item.image);
            if (!imageKey || group.entries[imageKey]) return;
            group.entries[imageKey] = true;
            group.question.items.push(item);
            var answerKey = normalizeExerciseText(item && item.answer);
            if (answerKey && group.options.every(function (current) { return normalizeExerciseText(current) !== answerKey; })) group.options.push(item.answer);
          });
          (Array.isArray(question.options) ? question.options : []).forEach(function (option) {
            var optionKey = normalizeExerciseText(option);
            if (!optionKey || group.options.some(function (current) { return normalizeExerciseText(current) === optionKey; })) return;
            group.options.push(option);
          });
        }
      });

      kept.forEach(function (question) {
        if (question.type === 'categorization' && Array.isArray(question.items) && question.items.length > 4) {
          question.prompt = 'Phân loại toàn bộ mục từ theo các nhóm đã học.';
          question.explanation = 'Các nhóm cần nhớ: ' + (question.categories || []).join(' / ') + '.';
        }
        if (question.type === 'matching' && Array.isArray(question.pairs) && question.pairs.length > 4) {
          question.prompt = 'Nối toàn bộ cụm từ với nghĩa hoặc cách dùng tương ứng.';
          question.explanation = 'Bài gộp giúp ôn toàn bộ các cặp từ và nghĩa trong cùng một lượt.';
        }
        if (question.type === 'image-match' && Array.isArray(question.items) && question.items.length > 4) {
          question.prompt = 'Ghép từng hình minh họa với từ hoặc cụm từ tương ứng.';
          question.explanation = 'Bài gộp giúp ôn toàn bộ hình minh họa và cụm từ trong cùng một lượt.';
        }
      });

      return kept.filter(function (question) {
        if (question.type === 'matching') return Array.isArray(question.pairs) && question.pairs.length;
        if (question.type === 'image-match') return Array.isArray(question.items) && question.items.length;
        return true;
      });
    }

    function mergeRepeatedGroupExercises(questions) {
      var grouped = mergeCategorizationQuestions(questions);
      return mergeRepeatedGroupQuestions(grouped);
    }

    function splitLongGroupQuestions(questions) {
      var groupFields = {
        categorization: 'items',
        matching: 'pairs',
        'image-match': 'items'
      };
      var split = [];

      questions.forEach(function (question) {
        var field = groupFields[question.type];
        var entries = field && Array.isArray(question[field]) ? question[field] : null;
        if (!entries || entries.length <= MAX_GROUP_ITEMS) {
          split.push(question);
          return;
        }

        var totalParts = Math.ceil(entries.length / MAX_GROUP_ITEMS);
        for (var start = 0; start < entries.length; start += MAX_GROUP_ITEMS) {
          var partNumber = Math.floor(start / MAX_GROUP_ITEMS) + 1;
          var part = Object.assign({}, question);
          part.id = String(question.id || question.type || 'group') + '-part-' + partNumber;
          part[field] = entries.slice(start, start + MAX_GROUP_ITEMS);
          if (question.type === 'image-match') {
            var answerKeys = Object.create(null);
            var chunkAnswers = [];
            part[field].forEach(function (item) {
              var answerKey = normalizeExerciseText(item && item.answer);
              if (answerKey && !answerKeys[answerKey]) {
                answerKeys[answerKey] = true;
                chunkAnswers.push(item.answer);
              }
            });
            var originalOptions = Array.isArray(question.options) ? question.options : [];
            originalOptions.forEach(function (option) {
              if (chunkAnswers.length >= MAX_GROUP_ITEMS) return;
              var optionKey = normalizeExerciseText(option);
              if (optionKey && !answerKeys[optionKey]) {
                answerKeys[optionKey] = true;
                chunkAnswers.push(option);
              }
            });
            part.options = chunkAnswers;
          }
          part.prompt = String(question.prompt || '').replace(/[\s.]+$/, '') + ' · phần ' + partNumber + '/' + totalParts + '.';
          part.explanation = question.type === 'categorization'
            ? 'Phần ' + partNumber + '/' + totalParts + '. Các nhóm cần nhớ: ' + (question.categories || []).join(' / ') + '.'
            : question.type === 'matching'
              ? 'Phần ' + partNumber + '/' + totalParts + '. Nối các cụm từ với nghĩa hoặc cách dùng tương ứng.'
              : 'Phần ' + partNumber + '/' + totalParts + '. Ghép từng hình với từ hoặc cụm từ tương ứng.';
          split.push(part);
        }
      });
      return split;
    }

    function questionOriginRank(question) {
      var id = String(question && question.id || '').toLowerCase();
      if (/^(p\d+|quick-)/.test(id)) return 0;
      if (/^(e\d+|full-)/.test(id)) return 1;
      if (/^(g\d+|x-?)/.test(id)) return 2;
      if (/^std-/.test(id)) return 3;
      return 1;
    }

    function selectDiverseQuestions(questions, limit) {
      if (questions.length <= limit) return questions.slice();
      var buckets = Object.create(null);
      questions.forEach(function (question, index) {
        var bucketKey = normalizeExerciseText(question.category || 'general') + '|' + String(question.difficulty || 1);
        if (!buckets[bucketKey]) buckets[bucketKey] = [];
        buckets[bucketKey].push({ question: question, index: index });
      });

      var bucketKeys = Object.keys(buckets);
      bucketKeys.forEach(function (key) {
        buckets[key].sort(function (left, right) {
          return questionOriginRank(left.question) - questionOriginRank(right.question)
            || Number(left.question.difficulty || 1) - Number(right.question.difficulty || 1)
            || left.index - right.index;
        });
      });
      bucketKeys.sort(function (left, right) {
        var leftFirst = buckets[left][0];
        var rightFirst = buckets[right][0];
        return questionOriginRank(leftFirst.question) - questionOriginRank(rightFirst.question)
          || leftFirst.index - rightFirst.index;
      });

      var selected = [];
      var cursors = Object.create(null);
      var progressed = true;
      while (selected.length < limit && progressed) {
        progressed = false;
        bucketKeys.forEach(function (key) {
          if (selected.length >= limit) return;
          var cursor = cursors[key] || 0;
          if (cursor >= buckets[key].length) return;
          selected.push(buckets[key][cursor]);
          cursors[key] = cursor + 1;
          progressed = true;
        });
      }
      return selected.sort(function (left, right) { return left.index - right.index; }).map(function (entry) { return entry.question; });
    }

    function curateQuestionSet(questions, mode) {
      var prepared = dedupeQuestions(splitLongGroupQuestions(questions));
      var byType = Object.create(null);
      prepared.forEach(function (question) {
        var type = String(question.type || 'other');
        if (!byType[type]) byType[type] = [];
        byType[type].push(question);
      });

      var curated = [];
      Object.keys(byType).forEach(function (type) {
        var limit = mode === 'test'
          ? (type === 'reading-tfng' ? 4 : 2)
          : (Object.prototype.hasOwnProperty.call(CURATION_LIMITS, type) ? CURATION_LIMITS[type] : 6);
        Array.prototype.push.apply(curated, selectDiverseQuestions(byType[type], limit));
      });
      return curated;
    }

    function dedupeQuestions(questions) {
      var kept = [];
      var seen = Object.create(null);
      var priorities = {
        'sentence-completion': 1,
        'sentence-complete': 1,
        'fill-blank': 2,
        'word-bank': 3,
        'sentence-order': 4,
        'image-choice': 5,
        'image-to-word': 5,
        'error-correction': 6
      };
      questions.forEach(function (question) {
        var key = sentenceQuestionKey(question);
        if (!key && question.type === 'paragraph-completion') key = 'paragraph|' + paragraphQuestionKey(question);
        if (!key && question.type === 'multi-fill' && Array.isArray(question.items)) {
          key = 'multi-fill|' + question.items.map(function (item) { return normalizeExerciseText(item.text); }).join('|');
        }
        if (!key) {
          var stable = {
            type: question.type,
            prompt: question.prompt,
            passage: question.passage,
            options: question.options,
            answer: question.answer,
            items: question.items,
            pairs: question.pairs
          };
          key = String(question.type || 'question') + '|' + normalizeExerciseText(JSON.stringify(stable));
        }
        var priority = priorities[question.type] || 10;
        if (!seen[key]) {
          seen[key] = { index: kept.length, priority: priority };
          kept.push(question);
        } else if (priority < seen[key].priority) {
          kept[seen[key].index] = question;
          seen[key].priority = priority;
        }
      });
      return kept;
    }

    function grammarTarget(index) {
      var naturalPhrases = {
        'say (something)': 'say something', 'say hello / goodbye': 'say hello',
        'say thank you / sorry / please': 'say thank you', 'tell somebody something': 'tell a friend a story',
        'tell (me) the time': 'tell me the time', 'ask (somebody) a question': 'ask a friend a question',
        'ask somebody to do something': 'ask a friend to help me', 'ask for something': 'ask for help',
        'speak + ngôn ngữ': 'speak English', 'talk to somebody': 'talk to a friend',
        'talk about something': 'talk about the plan', 'answer (a question / the phone)': 'answer a question',
        'reply to something': 'reply to a message', 'spell (a word)': 'spell a word',
        'pronounce (a word)': 'pronounce a word', 'get on with somebody': 'get on with my colleague',
        'get over something': 'get over a cold', 'turn up': 'turn up the music',
        'turn down (volume)': 'turn down the music', 'turn down (refuse)': 'turn down an invitation',
        'go on': 'go on working', 'go off': 'go off at seven', 'do up': 'do up my coat',
        'take off (clothes)': 'take off a coat', 'go by + phương tiện': 'go by bus',
        'ride (a bike)': 'ride a bike', 'drive (a car)': 'drive a car', 'catch (the bus)': 'catch the bus',
        'miss (the train)': 'miss the train', 'arrive in + thành phố / quốc gia': 'arrive in Hanoi',
        'arrive at + địa điểm cụ thể': 'arrive at the airport', 'pass (somebody something)': 'pass a friend a note',
        'have / take a shower': 'have a shower', 'phone / call a friend': 'call a friend'
      };
      var grammarVerbs = {
        have: true, go: true, do: true, make: true, come: true, take: true, bring: true, get: true,
        wake: true, turn: true, put: true, look: true, pick: true, say: true, tell: true, speak: true,
        catch: true, fly: true, leave: true, run: true, drive: true, ride: true, write: true, buy: true,
        think: true, teach: true, hear: true, meet: true, sleep: true, sit: true, stand: true,
        walk: true, jump: true, dance: true, jog: true, swim: true, climb: true, fall: true, miss: true,
        arrive: true, push: true, pull: true, carry: true, pass: true, ask: true, talk: true, answer: true,
        reply: true, spell: true, pronounce: true, listen: true, call: true, phone: true, watch: true,
        wash: true, clean: true, brush: true, study: true, work: true, finish: true, rest: true,
        travel: true, shop: true, visit: true, bake: true, cook: true, open: true, change: true
      };
      var inflectedHeads = {
        has: true, had: true, goes: true, went: true, gone: true, does: true, did: true, done: true,
        makes: true, made: true, comes: true, came: true, takes: true, took: true, taken: true,
        brings: true, brought: true, gets: true, got: true, says: true, said: true, tells: true,
        told: true, speaks: true, spoke: true, catches: true, caught: true, flies: true, flew: true,
        leaves: true, left: true, wakes: true, woke: true, puts: true, runs: true, ran: true,
        drives: true, drove: true, rides: true, rode: true, writes: true, wrote: true,
        buys: true, bought: true, thinks: true, thought: true, teaches: true, taught: true, hears: true,
        heard: true, meets: true, met: true, sleeps: true, slept: true, sits: true, sat: true,
        stands: true, stood: true
      };
      var candidates = bank.filter(function (item) {
        var phrase = String(naturalPhrases[String(item.word || '').toLowerCase()] || item.word || '').toLowerCase();
        var head = phrase.trim().split(/\s+/)[0];
        return grammarVerbs[head] && phrase !== 'have got' && !inflectedHeads[head] && !/ied$|ed$/.test(head) && !/[()\/+!]/.test(phrase) && !/\b(somebody|someone|something)\b/.test(phrase);
      }).map(function (item) {
        var phrase = naturalPhrases[String(item.word || '').toLowerCase()];
        return phrase ? Object.assign({}, item, { word: phrase }) : item;
      });
      return candidates.length ? candidates[index % candidates.length] : bank[index % bank.length];
    }

    function dynamicTranslation(target, offset) {
      var base = target.word;
      var meaning = target.meaning;
      var frame = offset % 4;
      var complement = '';
      if (/^(turn off|turn on)$/i.test(base)) complement = ' the lights';
      else if (/^(put on|take off)$/i.test(base)) complement = ' my coat';
      else if (/^bring back$/i.test(base)) complement = ' the book';
      else if (/^pick up$/i.test(base)) complement = ' my sister';
      else if (/^look up$/i.test(base)) complement = ' the new word';
      else if (/^get on$/i.test(base)) complement = ' the bus';
      else if (/^get off$/i.test(base)) complement = ' the bus';
      else if (/^have got$/i.test(base)) complement = ' a new key';
      else if (/^have to$/i.test(base)) complement = ' leave early';
      if (/^have to$/i.test(base)) {
        var obligationPairs = [
          { vi: 'Tôi thường phải rời nhà sớm để tránh tắc đường.', en: 'I usually have to leave home early to avoid traffic.' },
          { vi: 'Cô ấy phải hoàn thành báo cáo trước cuộc họp.', en: 'She has to finish the report before the meeting.' },
          { vi: 'Hôm qua, chúng tôi phải đợi ở nhà ga gần một giờ.', en: 'Yesterday, we had to wait at the station for nearly an hour.' },
          { vi: 'Bạn có phải làm việc vào Chủ nhật không?', en: 'Do you have to work on Sundays?' }
        ];
        return obligationPairs[frame];
      }
      var vi;
      var en;
      if (frame === 0) {
        vi = 'Dịch sang tiếng Anh: “Tôi thường ' + meaning + ' sau bữa sáng.”';
        en = 'I usually ' + base + complement + ' after breakfast.';
      } else if (frame === 1) {
        vi = 'Dịch sang tiếng Anh: “Cô ấy ' + meaning + ' sau giờ học mỗi ngày.”';
        en = 'She ' + inflectPhrase(base, 'third') + complement + ' after class every day.';
      } else if (frame === 2) {
        vi = 'Dịch sang tiếng Anh: “Hôm qua, chúng tôi ' + meaning + ' sau buổi họp.”';
        en = 'Yesterday, we ' + inflectPhrase(base, 'past') + complement + ' after the meeting.';
      } else {
        vi = 'Dịch sang tiếng Anh: “Bạn có thể ' + meaning + ' trước bữa tối không?”';
        en = /^have to$/i.test(base)
          ? 'Do you have to' + complement + ' before dinner?'
          : 'Can you ' + base + complement + ' before dinner?';
      }
      return { vi: vi, en: en };
    }

    function createError(index) {
      var key = pageName;
      var seeds = errorBank[key] || errorBank[Object.keys(errorBank).filter(function (name) { return lessonKey.indexOf(name.replace(/-/g, '_')) !== -1; })[0]] || errorBank['07-come-came-come'];
      var seed = seeds[index];
      var target = grammarTarget(index + 6);
      var wrong;
      var corrected;
      if (seed) {
        wrong = seed[0];
        corrected = seed[1];
      } else {
        var base = String(target.word || 'go').trim();
        var pattern = (index - seeds.length) % 3;
        if (pattern === 0) {
          wrong = 'Yesterday, we ' + base + ' after the appointment.';
          corrected = 'Yesterday, we ' + inflectPhrase(base, 'past') + ' after the appointment.';
        } else if (pattern === 1) {
          wrong = 'She ' + base + ' before breakfast every day.';
          corrected = 'She ' + inflectPhrase(base, 'third') + ' before breakfast every day.';
        } else {
          wrong = 'Did they ' + inflectPhrase(base, 'past') + ' before lunch?';
          corrected = 'Did they ' + base + ' before lunch?';
        }
      }
      return {
        type: 'error-correction', category: category, difficulty: sentenceDifficulty(index),
        prompt: 'Sửa lỗi ngữ pháp hoặc cách dùng trong câu: “' + wrong + '”', answer: [corrected],
        explanation: seed ? seed[2] : 'Câu hoàn chỉnh: “' + corrected + '”. Chú ý thì quá khứ, ngôi thứ ba số ít và cấu trúc câu hỏi với did.'
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
      var common = { id: id, type: type, category: category, difficulty: sentenceDifficulty(index) };

      if (type === 'multiple-choice') {
        if (index < 5) return Object.assign({}, common, {
          prompt: 'Chọn cụm tiếng Anh đúng với nghĩa: “' + target.meaning + '”.',
          options: mixOptions(optionsFor(target, index, 4), index), answer: target.word,
          explanation: 'Cụm cần nhớ: ' + target.word + ' — ' + target.meaning + '.'
        });
        var choiceTarget = grammarTarget(index);
        var choiceSentence = practiceSentence(choiceTarget, index, 0);
        var choiceForm = practiceForm(choiceTarget, index, 0);
        return Object.assign({}, common, {
          prompt: (index < 10 ? 'Chọn cụm phù hợp với ngữ cảnh: ' : 'Đọc kỹ dấu hiệu thời gian rồi chọn cụm phù hợp: ') + '“' + maskPhrase(choiceSentence, choiceForm) + '”',
          options: contextualFormOptions(choiceTarget, index + 2, 0, 4), answer: choiceForm,
          explanation: 'Đáp án là “' + choiceForm + '” (cụm gốc: ' + choiceTarget.word + ' — ' + choiceTarget.meaning + ').'
        });
      }
      if (type === 'fill-blank') {
        var fillTarget = grammarTarget(index);
        var fillSentence = practiceSentence(fillTarget, index, 0);
        var fillForm = practiceForm(fillTarget, index, 0);
        return Object.assign({}, common, {
          prompt: 'Điền cụm còn thiếu vào câu: “' + maskPhrase(fillSentence, fillForm) + '”', answer: fillForm,
          explanation: 'Đáp án là “' + fillForm + '” (cụm gốc: ' + fillTarget.word + ' — ' + fillTarget.meaning + '). Câu đầy đủ: “' + fillSentence + '”'
        });
      }
      if (type === 'word-bank') {
        var bankTarget = grammarTarget(index + 2);
        var bankSentence = practiceSentence(bankTarget, index, 1);
        var bankForm = practiceForm(bankTarget, index, 1);
        return Object.assign({}, common, {
          prompt: 'Dùng ngân hàng từ để hoàn thành câu: “' + maskPhrase(bankSentence, bankForm) + '”', bank: contextualFormOptions(bankTarget, index + 2, 1, 5), answer: bankForm,
          explanation: 'Đáp án là “' + bankForm + '” (cụm gốc: ' + bankTarget.word + ' — ' + bankTarget.meaning + ').'
        });
      }
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
        var orderTarget = grammarTarget(index + 4);
        var sentence = practiceSentence(orderTarget, index, 2);
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
          prompt: 'Nhìn hình, đoán từ hoặc cụm động từ được minh họa.', image: imageTarget.image,
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
        var readingTarget = bank[index % bank.length] || target;
        var passage = readingTarget.example || readingTarget.word;
        return Object.assign({}, common, {
          passage: passage,
          prompt: (index < 5 ? 'Đọc câu rồi chọn nghĩa đúng của cụm in đậm: ' : index < 10 ? 'Dựa vào câu, cụm từ này diễn tả điều gì? ' : 'Suy ra nghĩa phù hợp nhất từ ngữ cảnh của cụm từ: ') + '“' + readingTarget.word + '”',
          options: mixOptions([readingTarget.meaning].concat(take(bank.filter(function (item) { return item.word !== readingTarget.word && item.meaning !== readingTarget.meaning; }), index + 3, 3).map(function (item) { return item.meaning; })), index + 1), answer: readingTarget.meaning,
          explanation: 'Ngữ cảnh: “' + passage + '” Cụm “' + readingTarget.word + '” có nghĩa là “' + readingTarget.meaning + '”.'
        });
      }
      if (type === 'true-false') {
        var isTrue = index % 2 === 0;
        if (index >= 5) {
          var grammarItem = grammarTarget(index + 3);
          var frame = (index + 2) % 4;
          var correctSentence = practiceSentence(grammarItem, index, 2);
          var correctForm = practiceForm(grammarItem, index, 2);
          var incorrectForm = frame === 1 || frame === 2
            ? grammarItem.word
            : inflectPhrase(grammarItem.word, frame === 0 ? 'third' : 'past');
          var claim = isTrue ? correctSentence : correctSentence.replace(correctForm, incorrectForm);
          return Object.assign({}, common, {
            prompt: 'Đúng hay sai? Câu “' + claim + '” chia động từ phù hợp với chủ ngữ và dấu hiệu thời gian.',
            answer: isTrue ? 'true' : 'false',
            explanation: 'Câu đúng là “' + correctSentence + '”. Cụm gốc: ' + grammarItem.word + ' — ' + grammarItem.meaning + '.'
          });
        }
        var falseCandidates = bank.filter(function (item) { return item.meaning !== target.meaning && item.word !== target.word; });
        var falseTarget = falseCandidates[index % Math.max(1, falseCandidates.length)] || other;
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
        var isPracticeReadingFill = String(id || '').indexOf('std-p-multi-fill-') === 0 && index === TARGET_PER_TYPE - 1;
        var isExamReadingFill = String(id || '').indexOf('std-t-multi-fill-') === 0 && index === 7;
        if ((isPracticeReadingFill || isExamReadingFill) && advancedLesson && advancedLesson.passage) {
          var sourceText = advancedLesson.passage.text;
          var passageMatches = [];
          bank.forEach(function (item) {
            var base = String(item.word || '').trim();
            if (!base || /[()\/+!]/.test(base)) return;
            [base, inflectPhrase(base, 'past'), inflectPhrase(base, 'third')].forEach(function (form) {
              var escaped = form.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              var occurrence = new RegExp('\\b' + escaped + '\\b', 'i').exec(sourceText);
              if (!occurrence || passageMatches.some(function (match) {
                return match.item.word.toLowerCase() === item.word.toLowerCase() || match.answer.toLowerCase() === occurrence[0].toLowerCase();
              })) return;
              passageMatches.push({ start: occurrence.index, end: occurrence.index + occurrence[0].length, answer: occurrence[0], item: item });
            });
          });
          passageMatches.sort(function (left, right) { return left.start - right.start || (right.end - right.start) - (left.end - left.start); });
          var passageGaps = [];
          for (var gapIndex = 0; gapIndex < passageMatches.length && passageGaps.length < 4; gapIndex += 1) {
            var passageCandidate = passageMatches[(index * 2 + gapIndex) % passageMatches.length];
            if (passageGaps.some(function (match) { return passageCandidate.start < match.end && passageCandidate.end > match.start; })) continue;
            passageGaps.push(passageCandidate);
          }
          if (passageGaps.length < 4) {
            passageGaps = [0, 1, 2, 3].map(function (number) {
              var fallback = grammarTarget(index * 4 + number);
              var sentence = practiceSentence(fallback, index + number, number + 1);
              var answer = practiceForm(fallback, index + number, number + 1);
              var at = sentence.toLowerCase().indexOf(answer.toLowerCase());
              return { start: at, end: at + answer.length, answer: answer, item: fallback, fallback: sentence };
            });
            sourceText = passageGaps.map(function (match) { return match.fallback; }).join(' ');
            passageGaps = passageGaps.map(function (match) {
              var at = sourceText.toLowerCase().indexOf(match.answer.toLowerCase());
              return { start: at, end: at + match.answer.length, answer: match.answer, item: match.item };
            }).sort(function (left, right) { return left.start - right.start; });
          }
          var passageCursor = 0;
          var passageWithGaps = '';
          var passageItems = [];
          passageGaps.forEach(function (match, position) {
            passageWithGaps += sourceText.slice(passageCursor, match.start) + '____ (' + (position + 1) + ')';
            passageCursor = match.end;
            passageItems.push({ text: 'Chỗ trống ' + (position + 1), answer: match.answer, source: match.item });
          });
          passageWithGaps += sourceText.slice(passageCursor);
          return Object.assign({}, common, {
            prompt: 'Đọc bài văn và tự điền cụm từ phù hợp vào bốn chỗ trống.',
            passage: (advancedLesson.passage.title || '') + '\n\n' + passageWithGaps,
            items: passageItems,
            explanation: passageItems.map(function (item) { return item.text + ': ' + item.answer; }).join(' · ')
          });
        }
        var fillSet = [0, 1, 2, 3].map(function (number) {
          var item = grammarTarget(index * 3 + number);
          var offset = number + 1;
          var sentence = practiceSentence(item, index + number, offset);
          var answer = practiceForm(item, index + number, offset);
          return { text: (number + 1) + '. “' + maskPhrase(sentence, answer) + '”', answer: answer, source: item };
        });
        return Object.assign({}, common, {
          prompt: 'Đọc các dấu hiệu thời gian, chia cụm động từ rồi điền đủ bốn câu.',
          items: fillSet,
          explanation: 'Mỗi câu có ngữ cảnh riêng. Kiểm tra thì, chủ ngữ và chính tả trước khi nộp.'
        });
      }
      if (type === 'short-answer') return Object.assign({}, common, {
        prompt: 'Tự viết một câu tiếng Anh mới, tối thiểu 8 từ, cho thấy bạn hiểu cách dùng “' + target.word + '”. Không chép nguyên câu mẫu.',
        rubric: ['Viết ít nhất 8 từ và đủ chủ ngữ – động từ.', 'Dùng đúng cụm “' + target.word + '”.', 'Ngữ cảnh thể hiện đúng nghĩa: ' + target.meaning + '.'],
        explanation: 'Đây là câu trả lời mở. Dùng rubric để tự rà nghĩa, trật tự từ và chính tả.'
      });
      if (type === 'translation') {
        var curated = advancedLesson && advancedLesson.translations || [];
        var isExamTranslation = String(id || '').indexOf('std-t-') === 0;
        var pair = !isExamTranslation && index < curated.length
          ? curated[index]
          : dynamicTranslation(grammarTarget(index + (isExamTranslation ? 31 : 10)), index - curated.length + (isExamTranslation ? 1 : 0));
        return Object.assign({}, common, {
          prompt: pair.vi,
          answer: pair.en,
          explanation: 'Bản dịch gợi ý: “' + pair.en + '”. Chú ý chia động từ theo chủ ngữ và mốc thời gian.'
        });
      }
      if (type === 'production') return Object.assign({}, common, {
        prompt: 'Nhiệm vụ nói / viết: tạo đoạn hội thoại 3 lượt có dùng tự nhiên cụm “' + target.word + '”. Sau đó đọc thành tiếng một lần.',
        rubric: ['Có đủ 3 lượt lời hoặc 3 câu liên kết.', 'Dùng đúng cụm “' + target.word + '”.', 'Ngữ cảnh tự nhiên và đúng nghĩa.', 'Đọc lại thành tiếng, sửa ít nhất một điểm nếu cần.'],
        explanation: 'Bài tạo ngôn ngữ được tự đánh giá bằng rubric; hãy ưu tiên câu có nghĩa rõ.'
      });
      if (type === 'error-correction') return Object.assign({}, common, createError(index));
      return null;
    }

    var practiceTypes = [
      'multiple-choice', 'image-choice', 'image-to-word', 'true-false', 'image-match',
      'fill-blank', 'word-bank', 'matching', 'categorization', 'sentence-completion',
      'sentence-complete', 'sentence-order', 'multi-fill', 'mini-reading',
      'paragraph-completion', 'paragraph-cloze', 'passage-complete', 'reading-tfng',
      'select-all', 'error-correction', 'translation', 'short-answer', 'production'
    ];
    var readingQuestions = [];
    if (advancedLesson && Array.isArray(advancedLesson.translations)) {
      advancedLesson.translations.forEach(function (pair, index) {
        practiceQuestions.push(createQuestion('translation', index, 'std-p-translation-' + (index + 1)));
      });
    }
    if (advancedLesson && advancedLesson.passage && Array.isArray(advancedLesson.passage.questions)) {
      readingQuestions = advancedLesson.passage.questions.map(function (item, index) {
        return {
          id: 'std-p-reading-' + (index + 1), type: 'mini-reading', category: 'context',
          difficulty: item.difficulty || 2,
          prompt: (item.kind === 'ielts' ? 'IELTS TRUE / FALSE / NOT GIVEN · ' : 'TOEIC READING · ') + item.prompt,
          passage: advancedLesson.passage.title + '\n\n' + advancedLesson.passage.text,
          options: item.options,
          answer: item.answer, explanation: item.explanation, readingPassageId: pageName
        };
      });
      practiceQuestions.push.apply(practiceQuestions, readingQuestions);
    }

    practiceQuestions.forEach(function (question) {
      if (question.type !== 'cloze') return;
      question.type = 'multi-fill';
      question.prompt = 'Đọc đoạn văn và điền cụm từ còn thiếu vào từng chỗ trống.';
      question.passage = String(question.text || '').replace(/\{(\d+)\}/g, '____ ($1)');
      question.items = (question.blanks || []).map(function (blank, index) {
        return { text: 'Chỗ trống ' + (index + 1), answer: blank.answer };
      });
      delete question.text;
      delete question.blanks;
    });

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

    var examTypes = [
      'multiple-choice', 'fill-blank', 'word-bank', 'matching', 'categorization', 'sentence-order',
      'image-choice', 'image-match', 'mini-reading', 'true-false', 'select-all', 'multi-fill',
      'translation', 'error-correction'
    ];
    examTypes.forEach(function (type) {
      for (var n = 0; n < EXAM_PER_TYPE; n += 1) {
        var question = createQuestion(type, n + 7, 'std-t-' + type.replace(/[^a-z0-9]+/gi, '-') + '-' + (n + 1));
        if (question) {
          question.category = 'final-challenge';
          testQuestions.push(question);
        }
      }
    });
    readingQuestions.forEach(function (question, index) {
      testQuestions.push(Object.assign({}, question, {
        id: 'std-t-reading-' + (index + 1), category: 'final-challenge'
      }));
    });

    // Clean the generated banks after every source has contributed questions.
    // The lesson HTML files expose these arrays as const, so update them in place.
    var normalizedPracticeQuestions = curateQuestionSet(mergeRepeatedGroupExercises(compactCompoundQuestions(practiceQuestions)), 'practice');
    practiceQuestions.splice(0, practiceQuestions.length);
    Array.prototype.push.apply(practiceQuestions, normalizedPracticeQuestions);

    var normalizedTestQuestions = curateQuestionSet(mergeRepeatedGroupExercises(compactCompoundQuestions(testQuestions)), 'test');
    testQuestions.splice(0, testQuestions.length);
    Array.prototype.push.apply(testQuestions, normalizedTestQuestions);

    var practiceTypeOrder = Object.create(null);
    practiceTypes.forEach(function (type, index) { practiceTypeOrder[type] = index; });
    practiceQuestions.sort(function (left, right) {
      var leftOrder = Object.prototype.hasOwnProperty.call(practiceTypeOrder, left.type) ? practiceTypeOrder[left.type] : practiceTypes.length;
      var rightOrder = Object.prototype.hasOwnProperty.call(practiceTypeOrder, right.type) ? practiceTypeOrder[right.type] : practiceTypes.length;
      return leftOrder - rightOrder
        || Number(left.difficulty || 1) - Number(right.difficulty || 1)
        || String(left.category || '').localeCompare(String(right.category || ''))
        || String(left.id || '').localeCompare(String(right.id || ''));
    });
    testQuestions.sort(function (left, right) {
      var leftOrder = Object.prototype.hasOwnProperty.call(practiceTypeOrder, left.type) ? practiceTypeOrder[left.type] : practiceTypes.length;
      var rightOrder = Object.prototype.hasOwnProperty.call(practiceTypeOrder, right.type) ? practiceTypeOrder[right.type] : practiceTypes.length;
      return leftOrder - rightOrder
        || Number(left.difficulty || 1) - Number(right.difficulty || 1)
        || String(left.category || '').localeCompare(String(right.category || ''))
        || String(left.id || '').localeCompare(String(right.id || ''));
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
      var isSequentialRun = type === 'all-sequential';
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

      var selectedCount = isSequentialRun
        ? practiceQuestions.length
        : practiceQuestions.filter(function (question) { return question.type === type; }).length;
      if (exerciseSessionTitle) {
        exerciseSessionTitle.textContent = isSequentialRun
          ? 'Luyện toàn bộ · lần lượt theo dạng'
          : 'Bài ' + String(practiceTypes.indexOf(type) + 1).padStart(2, '0') + ' · ' + (labels[type] || type);
      }
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
        typeSelect.value = isSequentialRun ? 'all' : type;
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
      var activePracticeTypeCount = practiceTypes.filter(function (type) {
        return practiceQuestions.some(function (question) { return question.type === type; });
      }).length;
      var cards = practiceTypes.map(function (type, index) {
        var count = practiceQuestions.filter(function (question) { return question.type === type; }).length;
        if (!count) return '';
        var description = type === 'translation'
          ? 'Dịch câu theo ngữ cảnh; luyện hiện tại, quá khứ, câu hỏi và collocation.'
          : type === 'mini-reading'
            ? 'Đọc bài dài, tìm chi tiết, suy luận và làm câu TOEIC hoặc TRUE / FALSE / NOT GIVEN.'
              : type === 'multi-fill'
                ? 'Điền nhiều chỗ trong câu và hoàn thành bài đọc theo ngữ cảnh.'
              : type === 'image-choice'
                ? 'Nhìn hình, nhận diện hoạt động và chọn đúng từ hoặc cụm động từ.'
                : type === 'image-match'
                  ? 'Ghép nhiều hình minh họa với các cụm động từ tương ứng.'
                  : type === 'error-correction'
                    ? 'Sửa câu trong nhiều ngữ cảnh, tập trung thì và cấu trúc câu.'
                    : 'Bộ câu hỏi chỉ gồm dạng ' + (labels[type] || type).toLowerCase() + ', tăng dần độ khó.';
        return '<article class="evu-exercise-card"><div class="evu-exercise-card-top"><span>BÀI ' + String(index + 1).padStart(2, '0') + '</span><b>' + count + '</b></div><h3>' + (labels[type] || type) + '</h3><p>' + description + '</p><button class="btn primary" type="button" data-evu-open-type="' + type + '">Vào bài luyện →</button></article>';
      }).join('');
      var sequentialRun = '<article class="evu-exercise-card evu-exercise-card-full"><div class="evu-exercise-card-top"><span>LUYỆN TOÀN BỘ</span><b>' + practiceQuestions.length + '</b></div><h3>Tất cả dạng, lần lượt</h3><p>Làm trọn ngân hàng theo từng nhóm dạng bài, từ đầu đến cuối; không xáo trộn giữa các dạng.</p><button class="btn primary" type="button" data-evu-open-sequence>Vào lượt luyện đầy đủ →</button></article>';
      exerciseCatalog.innerHTML = '<div class="evu-exercise-heading"><div><span class="evu-eyebrow">CHỌN BÀI LUYỆN</span><h2>Mỗi bài một dạng</h2><p>Chọn một dạng để làm trọn bộ câu hỏi cùng kiểu. Các dạng được tách riêng, không trộn trong bài luyện.</p></div><span class="evu-exercise-count">' + activePracticeTypeCount + ' dạng phù hợp</span></div>' + sequentialRun + '<div class="evu-exercise-grid">' + cards + '</div>';

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
        var sequenceButton = event.target.closest('[data-evu-open-sequence]');
        if (button) setExerciseMode(button.getAttribute('data-evu-open-type'));
        else if (sequenceButton) setExerciseMode('all-sequential');
        else return;
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
          banner.innerHTML = '<div class="evu-banner-top"><div><span class="evu-eyebrow">EVERYDAY VERBS · PRACTICE LAB</span><h2>Đủ dạng, vừa sức</h2><p>Câu hỏi đã được gộp theo ý, loại phần trùng và sắp xếp từ nhận diện đến vận dụng; mỗi dạng chỉ giữ một lượng vừa đủ để ôn hiệu quả.</p></div><div class="evu-total"><strong>' + practiceQuestions.length + '</strong><span>câu luyện tập</span></div></div><div class="evu-type-matrix">' + chips + '</div>';
      var summary = practiceView.querySelector('.practice-summary');
      if (summary) practiceView.insertBefore(banner, summary);
      else if (practiceView.querySelector('.section-heading')) practiceView.querySelector('.section-heading').insertAdjacentElement('afterend', banner);
    }
    installExerciseCatalog();

    function addReadingPassage(root, questionBank, cardAttribute) {
      if (!root || !advancedLesson || !advancedLesson.passage) return;
      var byId = Object.create(null);
      questionBank.forEach(function (question) { byId[question.id] = question; });
      var inserted = false;
      Array.from(root.querySelectorAll('[' + cardAttribute + ']')).forEach(function (card) {
        if (inserted) return;
        var question = byId[card.getAttribute(cardAttribute)];
        if (!question || question.readingPassageId !== pageName) return;
        var passage = document.createElement('section');
        passage.className = 'evu-reading-passage';
        var label = document.createElement('span');
        label.className = 'evu-eyebrow';
        label.textContent = 'READING · TOEIC DETAILS + IELTS TRUE / FALSE / NOT GIVEN';
        var title = document.createElement('h3');
        title.textContent = advancedLesson.passage.title;
        var text = document.createElement('p');
        text.textContent = advancedLesson.passage.text;
        passage.appendChild(label);
        passage.appendChild(title);
        passage.appendChild(text);
        root.insertBefore(passage, card);
        inserted = true;
      });
    }

    function standardizeQuestionCards() {
      var roots = [
        document.getElementById('practice-list'),
        document.getElementById('test-list')
      ];
      roots.forEach(function (root) {
        if (!root) return;
        var isPractice = root.id === 'practice-list';
        Array.from(root.querySelectorAll('.question-card')).forEach(function (card, index) {
          card.classList.add('evu-standard-question-card');
          var number = card.querySelector('.question-number');
          if (number) number.textContent = (isPractice ? 'Practice ' : 'Test ') + (index + 1);

          card.querySelectorAll('.question-meta .pill.blue').forEach(function (pill) { pill.remove(); });
          card.querySelectorAll('[data-clear-question]').forEach(function (button) { button.textContent = 'Xóa'; });

          var check = card.querySelector('[data-check-practice]');
          if (check) {
            var id = check.getAttribute('data-check-practice');
            var question = practiceQuestions.find(function (item) { return item.id === id; });
            check.textContent = question && (question.type === 'production' || question.type === 'short-answer')
              ? 'Lưu để tự kiểm tra'
              : 'Kiểm tra đáp án';
          }

          card.querySelectorAll('.word-bank .word-chip').forEach(function (chip) {
            if (chip.tagName === 'BUTTON') {
              chip.classList.add('bank-pick');
              return;
            }
            var button = document.createElement('button');
            button.type = 'button';
            button.className = chip.className + ' bank-pick';
            button.setAttribute('data-bank-pick', chip.textContent.trim());
            button.textContent = chip.textContent;
            chip.replaceWith(button);
          });
        });
      });
    }

    document.addEventListener('click', function (event) {
      var chip = event.target.closest('.question-card .word-bank [data-bank-pick]');
      if (!chip) return;
      var card = chip.closest('.question-card');
      var select = card && card.querySelector('[data-answer-select]');
      if (!select) return;
      select.value = chip.getAttribute('data-bank-pick') || '';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      card.querySelectorAll('[data-bank-pick]').forEach(function (item) {
        item.classList.toggle('chosen', item === chip);
      });
    });

    var originalRenderPractice = renderPractice;
    renderPractice = function () {
      originalRenderPractice();
      if (!practiceList) return;
      if (activeExerciseType === 'all-sequential') {
        var previousType = null;
        Array.from(practiceList.querySelectorAll('[data-question-card]')).forEach(function (card) {
          var questionId = card.getAttribute('data-question-card');
          var question = practiceQuestions.find(function (item) { return item.id === questionId; });
          if (!question || question.type === previousType) return;
          previousType = question.type;
          var typeHeading = document.createElement('div');
          typeHeading.className = 'evu-sequence-heading';
          typeHeading.textContent = 'Bài ' + String(practiceTypes.indexOf(question.type) + 1).padStart(2, '0') + ' · ' + (labels[question.type] || question.type);
          practiceList.insertBefore(typeHeading, card);
        });
      }
      addReadingPassage(practiceList, practiceQuestions, 'data-question-card');
      standardizeQuestionCards();
    };
    var originalRenderTest = renderTest;
    renderTest = function () {
      originalRenderTest();
      addReadingPassage(document.getElementById('test-list'), testQuestions, 'data-test-card');
      standardizeQuestionCards();
    };
    standardizeQuestionCards();
    if (typeof renderGame === 'function') {
      var originalRenderGame = renderGame;
      renderGame = function () {
        var game = state.game;
        var activeId = game && game.ids && game.ids[game.index];
        var question = activeId && practiceQuestions.concat(testQuestions).find(function (item) { return item.id === activeId; });
        var passageText = question && question.readingPassageId === pageName && advancedLesson && advancedLesson.passage && advancedLesson.passage.text;
        if (passageText) question.passage = passageText;
        originalRenderGame();
        if (passageText) delete question.passage;
      };
    }

    var testView = document.getElementById('view-test');
    if (testView && !document.getElementById('evu-exam-banner')) {
      var examBanner = document.createElement('div');
      examBanner.id = 'evu-exam-banner';
      examBanner.className = 'evu-exam-banner';
      examBanner.innerHTML = '<div class="evu-exam-copy"><span class="evu-eyebrow">FINAL BOSS · EVERYDAY VERBS</span><h2>Thử thách cuối chặng</h2><p>Đề trộn nhiều dạng, có câu dịch và bài đọc dài kèm giải thích. Bài gốc được mở rộng thêm ' + (EXAM_PER_TYPE * examTypes.length + readingQuestions.length) + ' nhiệm vụ có chấm điểm.</p><div class="evu-exam-tags"><span>✦ ' + examTypes.length + ' dạng kỹ năng</span><span>✓ Tự chấm và xem lỗi</span><span>↻ Có thể làm lại</span></div></div><div class="evu-clock-card"><span>Đồng hồ tùy chọn</span><strong id="evu-clock">60:00</strong><button type="button" class="btn primary" id="evu-clock-start">Bắt đầu 60 phút</button><small id="evu-clock-note">Bạn có thể làm không giới hạn thời gian.</small></div>';
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

    if (typeof initializeGame === 'function') initializeGame();
    if (typeof renderPractice === 'function') renderPractice();
    if (typeof renderTest === 'function') renderTest();
    if (typeof updateProgress === 'function') updateProgress();
  } catch (error) {
    console.error('Everyday Verbs standard setup could not finish.', error);
  }
})();
