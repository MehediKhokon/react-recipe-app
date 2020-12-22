import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SkeletonCard() {
    return (
    <SkeletonTheme color="#97a19e" highlightColor="#00ffb3">

        {Array(3).fill().map((item, index)=>{
            return(
                <div key={index} className="card mb-3 mt-5">	  
	  		        <div className="card-body">
	    		        <h5 className="card-title"><Skeleton duration={1.5} /></h5>
	    		        <p className="card-text">
                            <Skeleton duration={1.5} count={2} />
                        </p>
	    		        <p className="card-text"><small className="text-muted"><Skeleton duration={1.5} width={220} /></small></p>
	  		        </div>
		        </div>
            )
        })}
    </SkeletonTheme>
            
    )
}

export default SkeletonCard
