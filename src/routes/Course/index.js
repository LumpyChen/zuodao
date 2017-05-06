import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 450,
    overflowY: 'hidden',
  },
}

const tilesData = [
  {
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: '西方礼仪基础',
    author: '周海洋',
  },
  {
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493729763707&di=1c2efce28944d3259ec1176d733f60fb&imgtype=0&src=http%3A%2F%2Fimg002.21cnimg.com%2Fphotos%2Falbum%2F20160922%2Fm600%2FC91F4E63F35351F876D0AE1009AB80C8.jpeg',
    title: '创新总论与产业技术化',
    author: '吴桂生',
  },
  {
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493725782676&di=ef1a8cbb360ca626df54feda4627c2e1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fs%253D290%2Fsign%3D1a50e4f07d3e6709ba0042f60bc59fb8%2Fd833c895d143ad4b6cc55e1780025aafa50f0679.jpg',
    title: '微积分II',
    author: '高建',
  },
  {
    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493725938820&di=3350e2b3db9f18d7e9b9069d187ff350&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F71%2F01%2F01300000345731126189012018945.jpg',
    title: '哲学通论',
    author: '魏勇',
  },
]

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = props => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader style={{
        lineHeight: '50px',
        height: '30px',
      }}
      >为你推荐的课程</Subheader>
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          onTouchTap={() => props.history.push('/play')}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
    <FloatingActionButton style={{
      position: 'fixed',
      right: '25px',
      bottom: '85px',
    }}
    >
      <ContentAdd />
    </FloatingActionButton>
  </div>
)

export default GridListExampleSimple
