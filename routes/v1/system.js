export const heartbeat = (req, res) => {
    try {
        res.status(200).json({ message: 'Successful Heartbeat' });
    } catch (e) {
        res.status(500).json(e);
    }
};

// export const root = (req, res) => {
//     try {
//         res.status(200).json()
//     } catch (e) {
//         res.status(500).json(e);
//     }
// }
