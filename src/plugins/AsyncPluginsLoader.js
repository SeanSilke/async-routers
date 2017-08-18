import React from 'react';
import {BlankPlugin} from './BlankPlagin'

class AsyncPluginsLoader extends React.Component{

  state = {
    plugin: BlankPlugin,
  };

  setPlugin = async (pluginId)=>{
    const {plugin} = await import(`./${pluginId}`);
    this.setState({plugin})
  }

  componentWillMount(){
    const {pluginId} = this.props.match.params;
    pluginId && this.setPlugin(pluginId);
  }

  componentWillReceiveProps (
    {match:{params: {pluginId}}}
  ){this.setPlugin(pluginId);}

   render (){
    return <this.state.plugin {...this.props} />
  }
}

export {AsyncPluginsLoader};
