import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import FileDownload from 'material-ui/svg-icons/file/file-download'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import { blue500, yellow600 } from 'material-ui/styles/colors'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart'

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia>
      <video src="/course.mp4" controls="controls" />
    </CardMedia>
    <CardTitle
      title="创新总论与技术产业化" subtitle="吴贵生"
    />
    <CardHeader
      title="相关课件下载"
      subtitle="做到提供的课件严禁用于商业行为，违者将被追诉法律责任"
      style={{
        paddingTop: 0,
        paddingBottom: 0,
      }}
    />
    <CardText>
      <List>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          rightIcon={<FileDownload />}
          primaryText="第一讲"
          secondaryText="Jan 9, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          rightIcon={<FileDownload />}
          primaryText="课程设计相关"
          secondaryText="Jan 17, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} />}
          rightIcon={<FileDownload />}
          primaryText="期末复习"
          secondaryText="Jan 28, 2014"
        />
      </List>
      <Divider />
      <List>
        <ListItem
          leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
          rightIcon={<FileDownload />}
          primaryText="作业评审标准.docx"
          secondaryText="Jan 20, 2014"
        />
        <ListItem
          leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
          rightIcon={<FileDownload />}
          primaryText="展示.ppt"
          secondaryText="Jan 10, 2014"
        />
      </List>
    </CardText>
  </Card>
)

export default CardExampleWithAvatar
