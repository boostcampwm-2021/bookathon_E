const OvenDB = require('../model/db.js');

function insertOvenDB(type, contents) {
    const doc = {type : type, contents : contents};
    OvenDB.insert(doc, function (err, newDoc) {
        return newDoc;
    });
}

function removeAllOvenDB() {
    OvenDB.remove({}, {multi: true}, function (err, newDoc) {
        return newDoc;
    });
}

function countOvenDB() {
    OvenDB.count({}, function (err, newDoc) {
        console.log('SampleDataCount:' + newDoc);
        return newDoc;
    });
}

const addSampleData = async () => {
    removeAllOvenDB();
    insertOvenDB(1, '먼 훗날 되돌아본다면 그렇게 고통스러웠던 이 순간이 모두 잔인할 만큼 아름다운 추억이 되어있을 것이다.');
    insertOvenDB(1, '무엇이 옳은지에 대한 답은 이미 내가 잘 알고 있다. 단지 순간의 상황을 감정적으로 받아들였기 때문에 이성적인 판단을 내릴 수 없을 뿐이다. 스쳐 지나가는 감정처럼 조금만 지나면 이성을 다시 되찾을 수 있을 것이다.');
    insertOvenDB(1, '힘들 때 힘을 주는 글을 찾지 말고 창문 바깥의 풍경을 바라보며 자신에 대한 깊이 있는 고민을 해보라.');
    insertOvenDB(1, '패자는 늘 성공한 사람의 말에 귀 기울인다. 이미 답은 가까운 곳에 있거늘.');
    insertOvenDB(1, '사람은 힘들 때 엉뚱한 곳에서 답을 찾으려 해. 이미 자신이 경험하고 느끼고 깨달았으며 그에 따른 해답은 본인이 가장 잘 알고 있거늘.');
    insertOvenDB(1, '어려울 때 남에게 기대지 말고 어려운 상황을 이겨내왔던 나 자신에게 기대라.');
    insertOvenDB(1, '지금 너무나 잘하고 있다는 것을 본인은 모르는 법이다.');
    insertOvenDB(1, '힘을 주는 명언은 누군가에게 듣는 것이 아니라 나 스스로 세우는 것이다.');
    insertOvenDB(1, '포기하지만 않는다면 시간 차이일 뿐이다.');
    insertOvenDB(1, '결국엔 크고 가치 있는 방향으로 나아가게 될 거야.');
    insertOvenDB(2, '감사의 표시는 돈으로 하라.');
    insertOvenDB(2, '지금 공부 안하면 더울 때 더운데서 일하고 추울 때 추운데서 일한다.');
    insertOvenDB(2, '참을 인 세 번이면 호구된다.');
    insertOvenDB(2, '동정할거면 돈으로 줘라.');
    insertOvenDB(2, '오는 건 순서 있어도 가는 건 순서 없다.');
    insertOvenDB(2, '선배는 입 닫고 지갑 열어라!');
    insertOvenDB(2, '인생은 한방이 아니다.');
    insertOvenDB(2, '시작은 반이 아니다. 시작일 뿐이다.');
    insertOvenDB(2, '개천에서 용 난 사람 만나면 개천으로 빨려 들어간다.');
    insertOvenDB(2, '티끌 모아봤자 티끌이다.');
    countOvenDB();
}

module.exports = addSampleData;
