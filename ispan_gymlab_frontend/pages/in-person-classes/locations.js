import Navbar from '@/components/testing/MuiNavbar'
import Footer from '@/components/testing/footer'
import Map from '@/components/cart/map'

export default function Location() {
  return (
    <><Navbar />
      <div
        style={{
          padding: '130px',
          background:
            'linear-gradient(to right, #140F2AF4, #140F2AF4),url("/map.png")  no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          minHeight: '700px',
        }}
      >
        
        <h1
          style={{
            color: '#F9F9F9',
            fontWeight: 'normal',
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
          服務據點!
        </h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: '1200px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          <Map
            map_position={'大安資展旗艦店'}
            map_address={'臺北市大安區復興南路一段390號'}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d553.1190781932877!2d121.54295481376097!3d25.034091500535048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH5bGV5ZyL6Zqb6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1695782296282!5m2!1szh-TW!2stw"
              width="300"
              height="300"
              style={{ border: '0' }}
              allowFullScreen="none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Map
            map_position={'內湖摩天輪分店'}
            map_address={'臺北市內湖區成功路一段52號'}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3543253979446!2d121.59002951170446!3d25.055977077709464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab7b5dbf1a95%3A0xa72902c7521ca830!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5oiQ5Yqf6Lev5LiA5q61NTLomZ8!5e0!3m2!1szh-TW!2stw!4v1695796257658!5m2!1szh-TW!2stw"
              width="300"
              height="300"
              style={{ border: '0' }}
              allowFullScreen="none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Map
            map_position={'淡水美美分店'}
            map_address={'新北市淡水區英專路25號'}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.989562491038!2d121.44284761170758!3d25.16983027763573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a5580ae24c91%3A0xff3df5997a41ae78!2zMjUx5paw5YyX5biC5reh5rC05Y2A6Iux5bCI6LevMjXomZ8!5e0!3m2!1szh-TW!2stw!4v1695796416513!5m2!1szh-TW!2stw"
              width="300"
              height="300"
              style={{ border: '0' }}
              allowFullScreen="none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Map
            map_position={'信義101分店'}
            map_address={'臺北市信義區市府路45號85樓'}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.998582333449!2d121.56144091170403!3d25.034122177723763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0x933295245cd0e2a0!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5biC5bqc6LevNDXomZ8!5e0!3m2!1szh-TW!2stw!4v1695796550224!5m2!1szh-TW!2stw"
              width="300"
              height="300"
              style={{ border: '0' }}
              allowFullScreen="none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Map
            map_position={'新店新的分店'}
            map_address={'新北市新店區中正路256號'}
          >
            <iframe
              src="
              https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.783835693452!2d121.53673311170236!3d24.97346817776325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346801f5d0f8d99b%3A0x81922b1ec0f186dc!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5Lit5q2j6LevMjU26Jmf!5e0!3m2!1szh-TW!2stw!4v1695796669567!5m2!1szh-TW!2stw"
              height="300"
              style={{ border: '0' }}
              allowFullScreen="none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
          <Map
            map_position={'板橋耶誕城分店'}
            map_address={'新北市板橋區民族路15號'}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.714232717585!2d121.45909931170344!3d25.00982447773952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a81dc44b2807%3A0xcdf0cb81051383e!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5rCR5peP6LevMTXomZ8!5e0!3m2!1szh-TW!2stw!4v1695796726603!5m2!1szh-TW!2stw"
              width="300"
              height="300"
              style={{ border: '0' }}
              allowFullScreen="none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
        </div>
      </div>
      <Footer />
    </>
  )
}
