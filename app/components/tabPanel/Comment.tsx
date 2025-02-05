"use client";

import Avatar from "../avatar/Avatar";

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface Product {
  reviews: Review[];
}

const Comment = ({ prd }: { prd: Product }) => {
  return (
    <div>
      {prd?.reviews?.length > 0 ? (
        prd.reviews.map((review, index) => (
          <div key={index} className="border-b py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar image={review.user} />
                <span className="font-semibold">{review.user}</span>
              </div>
              <div className="text-yellow-500">
                {"⭐".repeat(review.rating)}
              </div>
            </div>
            <div className="text-gray-700">{review.comment}</div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">
          Bu ürüne ait henüz bir yorum bulunmamaktadır.
        </div>
      )}

      <div className="mt-5 md:mt-10">
        <h3>Yorum Yap</h3>
        <textarea
          className="border p-2 w-full"
          placeholder="Yorumunuzu buraya yazınız"
        />
        {/* <Button text="Yorum yap" onClick={undefined} small /> */}
      </div>
    </div>
  );
};

export default Comment;
