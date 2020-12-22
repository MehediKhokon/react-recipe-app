import React from 'react'
import Skeleton from 'react-loading-skeleton'

function SkeletonCard() {
    return (
    <div>
        {Array(3).fill().map((item, index)=>{
            return(
                <div key={index} className="card mb-3 mt-5">	  
	  		        <div className="card-body">
	    		        <h5 className="card-title"><Skeleton duration={1} /></h5>
	    		        <p className="card-text">
                            <Skeleton duration={1} count={2} />
                        </p>
	    		        <p className="card-text"><small className="text-muted"><Skeleton duration={1} /></small></p>
	  		        </div>
		        </div>
            )
        })}
    </div>
            
    )
}

export default SkeletonCard
