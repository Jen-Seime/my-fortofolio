export const fetchApi = async (url:string, options?:RequestInit) => {
    const res = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
    });

    if (!res.ok) {
        throw new Error(`Request failed : ${res.status}`);
    }

    return res.json();
};