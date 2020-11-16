import React, { useContext } from "react"
import { Context } from "../Context"
import { getClass } from "../utils"

import Image from "../components/Image"

function Photos() {
    const { photos } = useContext(Context)
    const allPhotos = photos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            { allPhotos }
        </main>
    )
}

export default Photos