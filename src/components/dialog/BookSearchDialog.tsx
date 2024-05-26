import { ChangeEvent, useState } from 'react';
import Label from '../parts/Label';
import InputField from '../parts/InputField';
import Button from '../parts/Button';
import axios from 'axios';

type Props = {
    onClick: (title: string, imgUrl: string) => void;
}

const fetchSearchBooks = async (title: string): Promise<any> => {
    if (title.length === 0) {
        return [];
    }
    const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    console.log(res.data.items);

    if (res.data.totalItems === 0) {
        return [];
    }

    return res.data.items;
}

const BookSearchDialog: React.FC<Props> = ({ onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const [searchBookNameInput, setSearchBookNameInput] = useState<string>("");
    const changeSearchBookNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchBookNameInput(event.target.value);
    }

    const [searchBooks, setSearchBooks] = useState<any>([]);
    const clickSearchBooks = async (title: string) => {
        const searchBooks = await fetchSearchBooks(title);
        setSearchBooks(searchBooks);
    }

    return (
        <>
            <Button
                onClick={toggleModal}
                name="書籍名で検索"
            />

            {isModalOpen && (
                <div className="fixed top-0 right-0 bottom-0 left-60 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-[70%]">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    書籍検索
                                </h3>
                                <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4">
                                    <div className="flex items-center">
                                        <div className="w-[80%] mr-6">
                                            <Label name="書籍名" />
                                            <InputField
                                                onChange={changeSearchBookNameInput}
                                                value={searchBookNameInput}
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <Button
                                                name="検索"
                                                onClick={() => clickSearchBooks(searchBookNameInput)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {searchBooks.length === 0 && <div>検索してください。</div>}
                                {searchBooks.length > 0 && (
                                    <div
                                        className="relative flex flex-col overflow-y-auto max-h-[60vh] text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr>
                                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            タイトル
                                                        </p>
                                                    </th>
                                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                            イメージ
                                                        </p>
                                                    </th>
                                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {searchBooks.map((searchBook: any) => {
                                                    return (
                                                        <tr key={searchBook.id}>
                                                            <td className="p-4 border-b border-blue-gray-50">
                                                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                                    {searchBook.volumeInfo?.title}
                                                                </p>
                                                            </td>
                                                            <td className="p-4 border-b border-blue-gray-50">
                                                                <img src={searchBook.volumeInfo.imageLinks?.thumbnail} className="h-42 w-32" />
                                                                {!searchBook.volumeInfo.imageLinks?.thumbnail && "No Image"}
                                                            </td>
                                                            <td className="border-b border-blue-gray-50">
                                                                <Button
                                                                    name="選択"
                                                                    onClick={() => (onClick(searchBook.volumeInfo.title, searchBook.volumeInfo.imageLinks?.thumbnail), toggleModal())}
                                                                />
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookSearchDialog;
