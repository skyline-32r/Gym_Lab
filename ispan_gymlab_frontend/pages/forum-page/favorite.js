import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import MuiNavbar from '@/components/navbar/MuiNavbar'
import Footer from '@/components/testing/footer'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])
  const [collections, setCollections] = useState([])
  const router = useRouter()

  useEffect(() => {
    // TODO: 從API或其他資料源獲取用戶的收藏和喜愛的文章列表
    // 暫時使用假數據
    setFavorites([
      /* 您的喜愛的文章列表 */
    ])
    setCollections([
      /* 您的收藏的文章列表 */
    ])
  }, [])

  return (
    <>
      {/* Navbar */}
      <MuiNavbar />

      <div>
        <h2>我的喜愛</h2>
        {favorites.map((post, index) => (
          <Link href={`/forum-page/detail/${post.post_id}`} key={index}>
            <a>{post.title}</a>
          </Link>
        ))}
      </div>

      <div>
        <h2>我的收藏</h2>
        {collections.map((post, index) => (
          <Link href={`/forum-page/detail/${post.post_id}`} key={index}>
            <a>{post.title}</a>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  )
}
