import './assets/CSS/features.css'
import FeatureData from './components/featureData'
import { features } from './components/Data'
import 'boxicons'

const Features = () => {
  return (
    <div>
        <div className="features_grid">
            {features.map((feature, index) => {
                return (
                    <FeatureData key={index} {...feature} />
                )
            })}
        </div>
    </div>
  )
}

export default Features