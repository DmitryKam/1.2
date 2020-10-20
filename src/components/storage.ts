export const StorageService = {
        getItem(key: string) {
            return localStorage.getItem(key)
        },

        setItem(key: string, value: number){
            localStorage.setItem(key,String(value));
        }
}