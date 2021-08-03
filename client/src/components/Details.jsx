import Breakdown from "./details/Breakdown"
import './Details.scss'
const Details = () => {
  return (
    <div className='details'>
      <h4>Chart</h4>
      <Breakdown />
    </div>
  )
}

export default Details

// last price                                   marketcap
// price change %                       outstanding shares
// 52week high                            avg daily volume
// 52week low                              earnings date

