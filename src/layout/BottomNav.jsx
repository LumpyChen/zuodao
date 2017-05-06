import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

import ExamIcon from 'material-ui/svg-icons/action/spellcheck'
import CourseIcon from 'material-ui/svg-icons/social/school'
import PageIcon from 'material-ui/svg-icons/social/pages'

class BottomNav extends Component {

  select(index) {
    const { history } = this.props
    const arr = ['/', '/course', 'social']
    history.push(arr[index])
  }

  render() {
    const { location } = this.props
    let res = 0

    if (location.pathname === '/') {
      res = 0
    } else if (location.pathname === '/course' || location.pathname === '/play') {
      res = 1
    } else if (location.pathname === '/social') {
      res = 2
    }

    return (
      <Paper
        zDepth={1}
        style={this.props.style || null}
      >
        <BottomNavigation selectedIndex={res}>
          <BottomNavigationItem
            label="真题"
            icon={<ExamIcon />}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="课程"
            icon={<CourseIcon />}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="专栏"
            icon={<PageIcon />}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    )
  }
}

BottomNav.propTypes = {
  location: PropTypes.shape({}),
  history: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

export default BottomNav
