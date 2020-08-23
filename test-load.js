    const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    loop: 'one',
    listFolded: true,
    volume: 0.5,
    autoplay: true,
    listMaxHeight: 90,
    audio: [
        {
        name: 'Kawai-卡哇伊',
        artist: '🎉梨花镇-小镇茶馆电台🎉',
        url: 'https://pbas.club/music-api/Kawai/api.php',
        cover: 'https://cdn.jsdelivr.net/gh/TaylorLottner/images/images/ins.png'
        },
        {
        name: 'Vaporwave-蒸汽波',
        artist: '🎉梨花镇-小镇茶馆电台🎉',
        url: 'https://pbas.club/music-api/Vaporwave/api.php',
        cover: 'https://cdn.jsdelivr.net/gh/TaylorLottner/images/images/ins.png'
        },
        {
        name: '深夜放毒歌单',
        artist: '🎉梨花镇-小镇茶馆电台🎉',
        url: 'https://pbas.club/music-api/Depressed/api.php',
        cover: 'https://cdn.jsdelivr.net/gh/TaylorLottner/images/images/ins.png'
        },
        {
        name: '古风歌单',
        artist: '🎉梨花镇-小镇茶馆电台🎉',
        url: 'https://pbas.club/music-api/Old_Style/api.php',
        cover: 'https://cdn.jsdelivr.net/gh/TaylorLottner/images/images/ins.png'
        }
    ]
});
