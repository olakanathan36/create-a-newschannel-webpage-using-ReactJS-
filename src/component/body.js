import newsimg from './img/Red and White Breaking News YouTube Thumbnail.png';

export default function Bodytag(){
    return (
        <div className="bodytag">
            <div className="adv">
                
                <img src="https://via.placeholder.com/450X150"></img>
            </div>
            <div><p className="adv-para">Advertishment</p>
            </div>
            <div className="newstag">
                <div className="newscontant-1">
                    <div X><p className="title-tag">Premium</p></div>
                    <div className="news-1">
                        
                        <p>Power sector woes in Andhra Pradesh</p>
                        <a>V. Raghavendra</a>
                        <hr></hr>
                    </div>
                    <div className="news-2">
                    <p>The top court as custodian of liberties</p>
                    <a>Ashwani Kumar</a>
                    <hr></hr>
                    </div>
                    <div className="news-3">
                    <p>Possible revival of Dalit politics today</p>
                    <a>Harish S. Wankhede</a>
                    <hr></hr>
                    </div>
                    <div className="news-4">
                    <p>In Tamil Nadu, data on quota is a Pandora’s Box</p>
                    <a>T. RAMAKRISHAN</a>
                    <hr></hr>
                    </div>
                    <div className="news-5">
                    <p>Bangladesh's ousted Prime Minister Sheikh Hasina </p>
                    <a>Ashwani Kumar</a>
                    <hr></hr>
                    </div>
                </div>
                <div className="newscontant-2">
                    <div className="news-6">
                        <p className="title-tag">Kolkata</p>
                        <h2 className="heading">Why was doctor’s murder case not lodged at outset, High Court asks Bengal govt</h2>
                        <p>The Calcutta HC asked the State why it was trying to protect the principal of R.G. Kar Medical College and Hospital, where the crime occurred</p>
                        <a>Agni Siragugal</a>
                        <img className='breakingnews-img' src={newsimg} ></img>
                    </div>
                </div>
                <div className="newscontant-3">
                    <div ><p className="title-tag">Latest News</p></div>
                    <div className="news-7">
                        <h5>16 minutes ego-India</h5>
                        <p>BSF holds 83 flag meetings with BGB to monitor situation along Bangladesh border</p>
                        <hr></hr>
                    </div>
                    <div className="news-8">
                        <h5>45 minutes ego-Kerala</h5>
                        <p>Money laundering charges framed against TMC MP Saket Gokhale: ED</p>
                        <hr></hr>
                    </div>
                    <div className="news-9">
                        <h5>One hour ego-Paris</h5>
                        <p>NGT seeks action against former Assam principal conservator for forest diversion</p>
                        <hr></hr>
                    </div>
                    <div className="news-10">
                        <h5>Three hour ego-Odisha</h5>
                        <p>Bid to form new extremist group foiled in Assam</p>
                    </div>
                    <div className="news-11">
                        <h5>Three hour ego-Tamil nadu</h5>
                        <p>Ensure people displaced by violence can return home: Congress to Manipur government</p>
                    </div>
                </div>
            </div>
        </div>
    )
}