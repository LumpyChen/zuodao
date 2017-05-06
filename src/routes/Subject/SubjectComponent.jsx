import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import LinearProgress from 'material-ui/LinearProgress'

import JudgeSubject from './JudgeSubject'
import SelectSubject from './SelectSubject'
import Grade from './Grade'

class SubjectCard extends Component {
  render() {
    const { subject } = this.props
    const subjects = subject.subject
    const {
      pos,
      subjectFilled,
      subjectLength,
      subjectRight,
      nextSubject,
      lastSubject,
      fillSubject,
      submitSubject,
      submit,
      redo,
      grade,
    } = subject
    const subjectNow = subjects[pos]
    let res
    if (!submit) {
      res = (
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="每日小测 2017-05-02"
            subtitle={subjects[pos].class}
            style={{
              padding: '16px 16px 0px 16px',
            }}
          >
            <span style={{ position: 'absolute', top: '16px', right: '16px' }}>{subjectFilled}/{subjectLength}</span>
            <LinearProgress
              min={0}
              max={subjectLength}
              value={subjectFilled}
              mode="determinate"
              style={{
                margin: '12px auto',
              }}
            />
          </CardHeader>
          {
              subjectNow.type === 'judge' ?
                <JudgeSubject
                  index={pos}
                  qus={subjectNow.question}
                  ans={subjectNow.ans}
                  fill={fillSubject}
                /> :
                  <SelectSubject
                    index={pos}
                    qus={subjectNow.question}
                    ans={subjectNow.ans}
                    fill={fillSubject}
                    pic={subjectNow.pic}
                    select={subjectNow.select}
                  />
            }
          <CardActions style={{ textAlign: 'center' }}>
            <RaisedButton label="上一题" primary disabled={pos === 0} onTouchTap={lastSubject} />
            <RaisedButton
              label="下一题"
              primary
              disabled={pos === subjectLength - 1}
              onTouchTap={nextSubject}
            />
            <RaisedButton label="提交" secondary onTouchTap={submitSubject} />
          </CardActions>
        </Card>
      )
    } else {
      res = <Grade subjects={subjects} right={subjectRight} grade={grade} redo={redo} />
    }
    return res
  }
}

const SubjectCardOb = inject('subject')(observer(SubjectCard))

export default SubjectCardOb
