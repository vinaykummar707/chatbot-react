export const Dashboard = () => {
    return (
        <>
        <div className="bg-neutral-900 flex w-full h-screen">
            <div className=""></div>
            <div className="flex-1 p-8 gap-4 flex flex-col bg-neutral-900">
                <div style={{backgroundImage: "url('https://m.media-amazon.com/images/I/51yGvH1dDTL.jpg')"}} className={'h-[250px] bg-center bg-no-repeat bg-cover bg-neutral-800 border border-neutral-600 rounded-2xl'}>
                
                </div>
                
                <h1 className={'text-white font-bold text-xl'}>Trending Now</h1>
                
                <div className={'flex gap-4'}>
                    <div
                         className={'h-60 w-40 bg-center bg-no-repeat bg-cover bg-neutral-800 border border-neutral-600 rounded-2xl'}>
                    
                    </div><div
                         className={'h-60 w-40 bg-center bg-no-repeat bg-cover bg-neutral-800 border border-neutral-600 rounded-2xl'}>
                    
                    </div><div
                         className={'h-60 w-40 bg-center bg-no-repeat bg-cover bg-neutral-800 border border-neutral-600 rounded-2xl'}>
                    
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
        </>
    )
}