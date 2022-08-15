<div className="app">
<Routes>
   <Route path='/login' element={<Login />} />
   <Route path='/' element={[<Header />, <Home />]} />
   <Route path='/checkout' element={[<Header />, <Checkout />]} />
   <Route path='/payment' element={[<Header />, <Elements stripe={Promise} />, <Payment/>]} />
   <Route path='/' element={[<Header />, <Home/>]} />
  </Routes>
</div>


<div className='app'>
      <Header />
        <Routes> {/*In React 18, Routes is replaced with Switch, so do NOT change back to Switch */}
        
          <Route path='/login' element={<Login />}> 
          </Route>

           {/*we do not want the header in the GLOBAL position(above the ROUTES), se place then on top of each page that you want*/}
          <Route path='/checkout' element={<Checkout />}>
          </Route>

          
          {/*This default route must always be at the bottom otherwise will never be read.*/}
          <Route exact path='/' element={<Home />}>
          </Route>

        </Routes>
      </div>