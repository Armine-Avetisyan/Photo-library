import { IPhoto } from '../app/interfaces/photo.interface';

export const PhotoMockData: IPhoto[] = [
  {
    id: '1',
    author: 'Test author1',
    width: 100,
    height: 100,
    url: 'Test url1',
    download_url: 'Test download_url1',
    isFavorite: true,
  },
  {
    id: '2',
    author: 'Test author2',
    width: 200,
    height: 200,
    url: 'Test url2',
    download_url: 'Test download_url2',
    isFavorite: false,
  }
];


export const FavoritePhotoMockData: IPhoto[] = [
  {
    id: '1',
    author: 'Test author1',
    width: 100,
    height: 100,
    url: 'Test url1',
    download_url: 'Test download_url1',
    isFavorite: true,
  },
  {
    id: '2',
    author: 'Test author2',
    width: 200,
    height: 200,
    url: 'Test url2',
    download_url: 'Test download_url2',
    isFavorite: true,
  }
]
