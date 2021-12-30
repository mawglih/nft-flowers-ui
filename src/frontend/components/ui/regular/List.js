import {Images} from '../../../utils/images';

const List = props => {
    return (
        <div className="image-container">
            <div className='image-list'>
                {Images.map(item => {
                    return (
                        <div className='image-single'> 
                            <img src={item.src} alt={item.alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default List;
