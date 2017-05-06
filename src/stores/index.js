import { extendObservable, action } from 'mobx'

export class ViewStore {
  constructor() {
    extendObservable(this, {
      drawerOpenned: false,
      openDrawer: action.bound(function openDrawer() {
        this.drawerOpenned = true
      }),
      closeDrawer: action.bound(function closeDrawer() {
        this.drawerOpenned = false
      }),
    })
  }
}

export class SubjectStore {
  constructor() {
    extendObservable(this, {
      subject: [{
        class: '2017考研政治真题',
        type: 'judge',
        question: '社会主义市场经济不仅同社会主义政治制度、经济制度结合在一起，而且同社会主义精神文明结合在一起。',
        ans: null,
        rightAns: true,
      }, {
        class: '2017考研政治真题',
        type: 'select',
        question: '某地区进入供暖季后常常出现雾霾，而一旦出现大风天气或等到春暖花开后，雾霾就会散去或减少，从该地区较长时间的数据变化看，经过人们努力治霾，污染物排放总量在持续走低;但在某些时段，环境空气质量污染指数会迅速攀升，甚至“爆表”。这种看似“矛盾”的现象凸显了大气污染防治的一大特点：天帮忙很重要，但人努力才是根本。“人努力”与“天帮忙”之间的关系对我们正确处理主观能动性和客观规律之间辩证关系的启示是：',
        select: [
          '尊重事物的客观规律是正确发挥主观能动性的前提',
          '人类有意识的思想活动是掌握客观规律的根本前提',
          '认识活动是客观规律性与主观能动性相统一的基础',
          '尚未认识的外在自然规律对人的实践活动起着至关重要的作用',
        ],
        ans: null,
        rightAns: 0,
      }, {
        class: '2017考研英语真题',
        type: 'select',
        question: 'Some schools will have to make ________ in agreement with the national soccer reform.',
        select: [
          'judgments',
          'adjustments',
          'comments',
          'achievements',
        ],
        ans: null,
        rightAns: 1,
      }, {
        class: '2017考研英语真题',
        type: 'select',
        question: 'Niki is always full of ideas, but ________ is useful to my knowledge.',
        select: [
          'nothing',
          'no one',
          'neither',
          'none',
        ],
        ans: null,
        rightAns: 3,
      }, {
        class: '2017考研数学真题',
        type: 'select',
        question: '甲乙两人赛跑，计时开始时，甲在乙前方10(单位：m)处.图中，实线表示甲的速度曲线v=v1(t)(单位：m/s)，虚线表示乙的速度曲线v=v2(t)(单位：m/s)，三块阴影部分面积的数值一次为10，20，3，计时开始后乙追上甲的时刻记为(单位：s)，则：',
        pic: 'http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8565b092839fa828ba61e4647.jpg',
        select: [
          't0=10',
          '15<t0<20',
          't0=25',
          't0>25',
        ],
        ans: null,
        rightAns: 2,
      }],
      pos: 0,
      submit: false,
      get subjectRight() {
        return this.subject.filter(ele => ele.ans === ele.rightAns).length
      },
      get subjectLength() {
        return this.subject.length
      },
      get subjectFilled() {
        return this.subject.filter(ele => ele.ans !== null).length
      },
      get grade() {
        const ratio = this.subjectRight / this.subjectLength
        let res
        if (ratio === 1) {
          res = '题目全对，请继续保持！成功属于你'
        } else if (ratio < 0.5) {
          res = '错的有点多，再看看书吧'
        } else {
          res = '做的不错！复习下记错的知识点吧'
        }
        return res
      },
      fillSubject: action.bound(function fillSubject(ans) {
        this.subject[this.pos].ans = ans
      }),
      nextSubject: action.bound(function nextSubject() {
        this.pos += 1
      }),
      lastSubject: action.bound(function lastSubject() {
        this.pos -= 1
      }),
      submitSubject: action.bound(function submitSubject() {
        this.submit = true
      }),
      redo: action.bound(function redo() {
        this.submit = false
        this.pos = 0
        this.subject = this.subject.map((ele) => {
          ele.ans = null
          return ele
        })
      }),
    })
  }
}
