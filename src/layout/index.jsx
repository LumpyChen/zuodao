import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import PersonIcon from 'material-ui/svg-icons/social/person'
import IconButton from 'material-ui/IconButton'
import { renderRoutes } from 'react-router-config'
import { observer, inject } from 'mobx-react'
// import ReactIScroll from 'react-iscroll'
// import IScroll from 'iscroll'

import Logged from './Logged'
import Drawer from './Drawer'
import BottomNav from './BottomNav'

class LayOut extends Component {
  render() {
    const { route, history, location, view } = this.props
    let res = '真题测验'

    if (location.pathname === '/') {
      res = '真题测验'
    } else if (location.pathname === '/course') {
      res = '在线课程'
    } else if (location.pathname === '/social') {
      res = '学霸专栏'
    } else if (location.pathname === '/play') {
      res = '课程播放'
    }
    const { drawerOpenned, openDrawer, closeDrawer } = view

    return (
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <Drawer open={drawerOpenned} close={closeDrawer} />
        <AppBar
          title={res}
          onLeftIconButtonTouchTap={openDrawer}
          iconElementRight={<Logged />}
          iconElementLeft={
            <IconButton>
              <PersonIcon color={'#FFFFFF'} />
            </IconButton>
          }
          style={{ overflow: 'hidden' }}
        />
        <div style={{ position: 'absolute', bottom: '56px', top: '64px', overflow: 'scroll', width: '100%', height: `${window.innerHeight - 120}px` }}>
          {renderRoutes(route.routes)}
        </div>
        <BottomNav
          style={{ position: 'absolute', bottom: 0 }}
          history={history}
          location={location}
        />
      </div>
    )
  }
}


LayOut.propTypes = {
  route: PropTypes.shape({}),
  history: PropTypes.shape({}),
  location: PropTypes.shape({}),
  view: PropTypes.shape({}),
}

const LayOutOb = inject('view')(observer(LayOut))

export default LayOutOb
