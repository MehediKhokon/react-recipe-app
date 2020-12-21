import React, { useState } from 'react'

function Recipes({title, description, created}) {
    const [more, setMore] = useState(false)
    return (
        <div data-aos="fade-up" className="card mb-3 mt-5">	  
	  		<div className="card-body">
	    		<h5 className="card-title">{title}</h5>
	    		<p className="card-text">
                    {more ? description: `${description.substring(0,250)}...`}
                    <button className="btn" onClick={()=> setMore(!more)}>
                        {more ? 'show less': 'show more'}
                    </button>
                </p>
	    		<p className="card-text"><small className="text-muted">Date Added: {created.substring(0,10)}</small></p>
	  		</div>
		  </div>
    )
}

export default Recipes
