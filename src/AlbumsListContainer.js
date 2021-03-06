import * as React from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { getAlbums} from './actions/albums'

class AlbumsListContainer extends React.PureComponent {
  componentDidMount() {
    if (!this.props.albums.length) this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return (<div>
      <AlbumsList albums={this.props.albums} />
    </div>)
  }
}

const mapStateToProps = function (state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { getAlbums })(AlbumsListContainer)
