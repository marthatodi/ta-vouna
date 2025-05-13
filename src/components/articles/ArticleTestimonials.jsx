import React from 'react'
import Article from "/src/components/wrappers/Article.jsx"
import Testimonial from "/src/components/generic/Testimonial.jsx"
import Swipeable from "/src/components/capabilities/Swipeable.jsx"
import { SwiperSlide } from 'swiper/react'
import {useParser} from "/src/helpers/parser.js"
import {useUtils} from "/src/helpers/utils.js"


function ArticleTestimonials({ data }) {
    const parser = useParser()
   
    const parsedData = parser.parseArticleData(data)
    const items = parsedData.items
    parser.sortArticleItemsByDateDesc(items)
    const utils = useUtils()
    const parsedItems = parser.parseArticleItems(items)

    return(
        <div>
            <div style={{    alignItems: 'Center',
    justifyContent: 'center',
    display: 'flex',
    margin: '1rem'}}>
               <img src={utils.resolvePath(`public/images/pictures/avatar2.jpg`)}></img>
              </div>
            «Δεν ξέρω αν θα φροντίσουν κάποιοι να καταγράψουν όλο αυτό το […] έπος… Φοβάμαι όμως μήπως χαθούν όλα όσα ο λαός μας δημιούργησε στα χρόνια αυτά του τιτάνιου αγώνα… Αλλά κάτι τέτοιο δεν έγινε και με την Επανάσταση του 1821; Ποιος διαφύλαξε τη μουσική και τα λόγια των κλέφτικων και λαϊκών τραγουδιών, εκτός από ελάχιστες εξαιρέσεις;»
            <div style={{marginTop: '12pxS', textAlign: 'right'}}>Δημήτρης Κρέμος</div>
        </div>
       /*  <Article className={`article-testimonials`} title={ parsedData.title }>
            <Swipeable>
                {parsedItems.map((item, index) => (
                    <SwiperSlide className={`custom-swiper-slide`} key={index}>
                        <Testimonial quote={item.text}
                                     avatar={item.img}
                                     fallbackIcon={item.faIcon}
                                     fallbackIconColors={item.faIconColors}
                                     author={item.value}
                                     href={item.firstLink?.href}
                                     role={item.info}/>
                    </SwiperSlide>
                ))}
            </Swipeable>
        </Article> */
    )
}

export default ArticleTestimonials