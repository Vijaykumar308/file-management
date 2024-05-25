function NavigatorHeader({navigatorPath}) {

  return (
    <div className="py-4 px-16 flex bg-slate-100 border">
        Home / {navigatorPath.map((item,index)=>{
          return <div key={index} className="px-2 text-blue-600 capitalize"  >{item} /</div>
        })}
    </div>
  )
}

export default NavigatorHeader;
