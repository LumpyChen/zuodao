import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
// import Badge from 'material-ui/Badge'
import HelpIcon from 'material-ui/svg-icons/action/help'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import PhoneIcon from 'material-ui/svg-icons/communication/phone'

const Logged = props => (
  <IconMenu
    {...props}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    iconButtonElement={
      <IconButton>
        <NotificationsIcon color={'#FFFFFF'} />
      </IconButton>
    }
  >
    <MenuItem primaryText="消息中心" rightIcon={<NotificationsIcon />} />
    <MenuItem primaryText="帮助" rightIcon={<HelpIcon />} />
    <MenuItem primaryText="联系客服" rightIcon={<PhoneIcon />} />
  </IconMenu>
)

Logged.muiName = 'IconMenu'

export default Logged
