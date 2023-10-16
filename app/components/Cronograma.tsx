import React from 'react'

export default function Cronograma() {
  return (
    <div id="cronograma" className='mx-auto' style={{background: '#efc630'}}>
      {/* <h3 className='cronograma-title text-center'>Cronograma Atual</h3>
      <div className='grid grid-cols-3 gap-3' style={{background: '#efc630'}}>
        
        <div className='card h-96' style={{padding: '10px'}}>
          <div style={{background: 'white', height: '100%'}}>
            1
          </div>
        </div>

        <div className='card h-96' style={{padding: '10px'}}>
          <div style={{background: 'white', height: '100%'}}>
            2
          </div>
        </div>

        <div className='card h-96' style={{padding: '10px'}}>
          <div style={{background: 'white', height: '100%'}}>
            3
          </div>
        </div>
      </div>            */}
      <div className='grid grid-cols-1 gap-4'>
        <div className="min-h-screen bg-yellow-400 flex justify-center items-center">
          <div className="container mx-auto p-12 rounded-xl" >
            <h1 className="text-4xl uppercase font-bold from-current mb-8 text-center">Cronograma Atual</h1>
            
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0" style={{padding: "10px 100px 10px 100px"}}>
              <div>
                <div>
                  <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105" style={{ borderRadius: "15px"}}>
                    <div>
                      
                      <div className="px-4 py-2 h-max">
                        <h1 className="text-xl font-gray-700 font-bold text-center mb-10 mt-5">Por onde passamos</h1>
                        
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <button className="mt-12 text-center bg-yellow-400 py-2 rounded-lg" style={{ display: "block", margin: "0 auto", width: "150px"}}>Mais antigas</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105" style={{ borderRadius: "15px"}}>
                    <div>
                      
                      <div className="px-4 py-2 h-max">
                        <h1 className="text-xl font-gray-700 font-bold text-center mb-10 mt-5">Por onde passamos</h1>
                        
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <button className="mt-12 text-center bg-yellow-400 py-2 rounded-lg" style={{ display: "block", margin: "0 auto", width: "150px"}}>Mais antigas</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105" style={{ borderRadius: "15px"}}>
                    <div>
                      
                      <div className="px-4 py-2 h-max">
                        <h1 className="text-xl font-gray-700 font-bold text-center mb-10 mt-5">Por onde passamos</h1>
                        
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <p><span className='event-date' style={{backgroundColor: '#a8a8a8'}}>01/01</span> Japucutebipa</p><br/>
                        <button className="mt-12 text-center bg-yellow-400 py-2 rounded-lg" style={{ display: "block", margin: "0 auto", width: "150px"}}>Mais antigas</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
