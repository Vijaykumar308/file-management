function WrapperComponent({children}) {
  return (
    <div className="w-screen px-16 bg-red-500">
        {children}
    </div>
  )
}

export default WrapperComponent;
