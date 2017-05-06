import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card'


const ansReturn = (type, ans) => {
  let res
  if (ans === null) {
    res = '未填'
  } else if (type === 'judge') {
    res = ans.toString()
  } else {
    res = ['A', 'B', 'C', 'D'][ans]
  }
  return res
}

const Grade = props => (
  <Card style={{ width: '100%' }}>
    <CardHeader
      title="小测成绩 2017-05-02"
      style={{
        padding: '16px 16px 0px 16px',
      }}
    >
      <span style={{ position: 'absolute', top: '16px', right: '16px' }}>正确率：{props.right}/{props.subjects.length}</span>
    </CardHeader>
    <CardText>
      <div style={{ textAlign: 'center', color: 'rgb(0, 188, 212)' }}>{props.grade}</div>
      <Table selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>题目</TableHeaderColumn>
            <TableHeaderColumn>正确答案</TableHeaderColumn>
            <TableHeaderColumn>你的答案</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          showRowHover
        >
          {
            props.subjects.map((ele, i) => (
              <TableRow
                key={i}
                selectable={false}
                style={{
                  color: ele.ans === ele.rightAns ? 'rgba(0, 0, 0, 0.87)' : 'rgb(239, 154, 154)',
                }}
              >
                <TableRowColumn>{i + 1}</TableRowColumn>
                <TableRowColumn>
                  {ansReturn(ele.type, ele.rightAns)}
                </TableRowColumn>
                <TableRowColumn>
                  {ansReturn(ele.type, ele.ans)}
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </CardText>
    <CardActions style={{ textAlign: 'center' }}>
      <RaisedButton label="重做" primary onTouchTap={props.redo} />
    </CardActions>
  </Card>
)

export default Grade
