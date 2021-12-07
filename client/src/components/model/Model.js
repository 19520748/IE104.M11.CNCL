import React from "react";
import "./model.css"

export const Model = ({showModel, setShowModel}) => {
    return <>{
        showModel ? 
        <div className="model">
                <div className="model__inner">
                    <div className="model__header">
                        <p>Information</p>
                        <button onClick={()=>setShowModel(prev => !prev)}><i className="fas fa-times"></i></button>
                    </div>
                    <div className="model__body">
                        <h2>Chúng tớ nèeee</h2>
                        <p>
                            <a href="https://www.facebook.com/reviewuitie104" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> 
                                Page của chúng tớ nè</a>
                            <br /><br />
                            <a href="https://m.me/reviewuitie104" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-messenger"></i> Nhắn tin với
                                chúng tớ nè</a>
                        </p>
                    </div>
                    <div className="model__footer">
                        <button onClick={()=>setShowModel(prev => !prev)}>Close</button>
                    </div>
                </div>
            </div>
        
        :null }</>;

};
