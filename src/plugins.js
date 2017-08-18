import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import {PluginsLinksLoader} from './PluginsLinksLoader';
import {AsyncPluginsLoader} from './plugins/AsyncPluginsLoader';

class AsyncPlugins extends React.Component {

  state = {
    pluginsLinks: [],
  }

  async componentWillMount(){
    const pluginsLinks = await PluginsLinksLoader;

    this.setState({pluginsLinks})
  }

  render () {
    const {match: {url}} = this.props;
    return (<div>
      <h2>Plugins</h2>
      <ul>
        {this.state.pluginsLinks.map((sabPath,id)=>(
            <li key={id}>
                <Link to={`${url}/${sabPath}`}>
                  {sabPath}
                </Link>
            </li>
          )
        )}
      </ul>

      <Route path={`${url}/:pluginId`} component={AsyncPluginsLoader}/>
      <Route exact path={url} render={() => (
        <h3>Please select a plugin.</h3>
      )}/>
    </div>)

  }
}

export  {AsyncPlugins};
