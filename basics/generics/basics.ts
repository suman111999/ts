export function useState<T>(initial: T): [() => T, (v: T) => T] {

    let val: T = initial;
    return [() => val, (v: T) => val = v]
}

//M-2
//we can pass generics to the interface
interface Rank<RankItems> {
    item: RankItems;
    rank: number;
}
export function ranker<RankItems>(items: RankItems[], rank: (v: RankItems) => number) {

    //M-1
    // interface Rank {
    //     item: RankItems;
    //     rank: number;
    // }
    const ranks: Rank<RankItems>[] = items.map(item => ({
        item,
        rank: rank(item)
    }));

    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map(r => r.item);

}

//forEach,filter,map using reduce and that should be typesafe

export function customForEach<T>(items: T[], callback: (v: T) => void): void {
    items.reduce((acc, val) => {
        callback(val);
        return undefined;
    }, undefined)//2nd parmater of reduce is initialvalue
}

export function customFilter<T>(items: T[], callback: (v: T) => boolean): T[] {
    return items.reduce((acc: T[], val: T) => {
        if (callback(val)) {
            return [...acc, val]
        } else {
            return acc
        }
    }, []);
}

export function customMap<T, U>(items: T[], callback: (v: T) => U): U[] {
    return items.reduce((acc: U[], val: T) => {
        const x = callback(val)
        // acc.push(x);
        return [...acc, x]
    }, [])
}