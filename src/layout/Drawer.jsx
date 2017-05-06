import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, ListItem } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import ExamIcon from 'material-ui/svg-icons/action/spellcheck'
import CourseIcon from 'material-ui/svg-icons/social/school'
import PageIcon from 'material-ui/svg-icons/social/pages'
import PersonIcon from 'material-ui/svg-icons/social/person'
import SettingIcon from 'material-ui/svg-icons/action/settings'

export default class DrawerList extends Component {

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    const { open, close } = this.props
    return (
      <div>
        <Drawer
          docked={false}
          width={'70%'}
          open={open}
          onRequestChange={close}
        >
          <List>
            <Subheader>个人信息</Subheader>
            <ListItem
              primaryText="LumpyChen"
              leftAvatar={<Avatar src="http://img.zcool.cn/community/0177b355bee47d32f87528a1afca49.jpg" />}
              secondaryText="无个性，不签名"
            />
          </List>
          <ListItem
            leftAvatar={<Avatar icon={<PersonIcon />} />}
            primaryText="个人信息"
          />
          <ListItem
            leftAvatar={<Avatar icon={<ExamIcon />} />}
            primaryText="我的测试"
          />
          <ListItem
            leftAvatar={<Avatar icon={<CourseIcon />} />}
            primaryText="我的课程"
          />
          <ListItem
            leftAvatar={<Avatar icon={<PageIcon />} />}
            primaryText="我的专栏"
          />
          <ListItem
            leftAvatar={<Avatar icon={<SettingIcon />} />}
            primaryText="系统设置"
          />
        </Drawer>
      </div>
    )
  }
}

DrawerList.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
}
