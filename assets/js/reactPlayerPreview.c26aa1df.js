(self.webpackChunkuti_4_devops_docs=self.webpackChunkuti_4_devops_docs||[]).push([[6353],{6734:(e,t,r)=>{var a,i=Object.create,n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,c=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))p.call(e,i)||i===r||n(e,i,{get:()=>t[i],enumerable:!(a=l(t,i))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>g}),e.exports=(a=u,c(n({},"__esModule",{value:!0}),a));var h=((e,t,r)=>(r=null!=e?i(s(e)):{},c(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)))(r(6540));const m="64px",b={};class g extends h.Component{constructor(){super(...arguments),d(this,"mounted",!1),d(this,"state",{image:null}),d(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!h.default.isValidElement(t))if("string"!=typeof t){if(!b[e])return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then((e=>e.json())).then((t=>{if(t.thumbnail_url&&this.mounted){const r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),b[e]=r}}));this.setState({image:b[e]})}else this.setState({image:t})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:i}=this.props,{image:n}=this.state,l=h.default.isValidElement(e),o={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:{width:"100%",height:"100%",backgroundImage:n&&!l?`url(${n})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...o},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:l?"absolute":void 0,...o},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},p=h.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...i?{"aria-label":i}:{}},l?e:null,r||p)}}}}]);