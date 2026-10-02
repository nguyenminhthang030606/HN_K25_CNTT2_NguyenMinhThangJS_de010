let currentGateCode ="";
let isGateValid = false;

let totalRevenue = 0;

let totalGateSales = 0;
let choice;

do{
    choice = +prompt(`======================================
                HỆ THỐNG BÁN VÉ KHU VUI CHƠI DREAM PARK
                =======================================
                1. Nhập và kiểm chuẩn mã vé cổng
                2. Tính tiền vé trò chơi
                3. Thẩm định mã vé cổng may mắn
                0. Thoát chương trình
                =======================================
                vui lòng nhập lựa chọn của bạn(0-3): 
                `);
    switch (choice) {
        case 1:
            currentGateCode = "";
            isGateValid = false;
            let maVe = prompt("Nhập mã vé (ví dụ: PRK-12345): ");
            if (maVe === null || maVe.trim() === "") {
                console.log("Mã vé  không hợp lệ. Vui lòng thử lại.");
                break;
            }
            maVe = maVe.trim().toUpperCase();
            if (maVe.length < 6) {
                console.log("Mã vé  không hợp lệ. Độ dài tối thiểu là 6 ký tự.");
            }
            else if (!maVe.startsWith("PRK-")) {
                console.log("Mã vé  không hợp lệ. Mã phải bắt đầu bằng 'PRK-'.");
            }
            else if (maVe.includes(" ")) {
                console.log("Mã vé  không hợp lệ. Mã không được chứa khoảng trắng.");
            }
            else {
                currentGateCode = maVe;
                isGateValid = true;
                console.log("Mã vé  hợp lệ: ", currentGateCode);
            }
            break;
        case 2:
            if (!isGateValid) {
                console.log("Vui lòng nhập mã vé hợp lệ .");
                break;
            }

            let rideCount;
            let cancelled = false;

            do {
                let input = prompt("Nhập số vé (số nguyên > 0): ");

                if (input === null) {
                    console.log("Hủy giao dịch. Quay về menu.");
                    cancelled = true;
                    break;
                }

                rideCount = parseInt(input);

                if (isNaN(rideCount) || rideCount <= 0) {
                    console.log("Số lượng chỉ định không hợp lệ. Vui lòng nhập lại.");
                }

            } while (isNaN(rideCount) || rideCount <= 0);

            if (cancelled) {
                break;
            }

            let pricePerRide;

            while (true) {
                let input = prompt("Nhập giá vé (số nguyên > 0): ");

                if (input === null) {
                    console.log("Hủy giao dịch. Quay về menu.");
                    cancelled = true;
                    break;
                }

                pricePerRide = parseInt(input);

                if (isNaN(pricePerRide) || pricePerRide <= 0) {
                    console.log("Đơn giá không hợp lệ. Vui lòng nhập lại.");
                }
                else {
                    break;
                }
            }

            if (cancelled) {
                break;
            }

            let baseCost = rideCount * pricePerRide;
            let discount = rideCount >= 4 ? Math.round(baseCost * 0.1) : 0;
            let insurancePremium = Math.round((baseCost - discount) * 0.08);
            let totalPayment = (baseCost - discount) + insurancePremium;

            totalRevenue += totalPayment;
            totalGateSales += 1;
            console.log("KẾT QUẢ TÍNH TIỀN VÉ");
            console.log("Hóa đơn :");
            console.log("Mã phiếu: ", currentGateCode);
            console.log("Số vé: ", rideCount);
            console.log("Đơn giá vé: ", pricePerRide);
            console.log("Chi phí cơ sở : ", baseCost);
            console.log("Tiền giảm giá: ", discount);
            console.log("phí bảo hiểm tai nạn: ", insurancePremium);
            console.log("Tổng thanh toán: ", totalPayment);
            currentGateCode = "";
            isTicketValid = false;
            break;
    
            case 3:
            let serialNumber = prompt("Nhập số seri trên vé  (chỉ gồm các chữ số): ");

            if (serialNumber === null || serialNumber.trim() === "") {
                console.log("Số seri không hợp lệ. Vui lòng thử lại.");
                break;
            }

            serialNumber = serialNumber.trim();

            if (
                !/^\d+$/.test(serialNumber) ||
                serialNumber.length < 2 ||
                /^0+$/.test(serialNumber)
            ) {
                console.log("Số seri không hợp lệ. Vui lòng thử lại.");
                break;
            }

            let reversedSerial = serialNumber.split('').reverse().join('');

            let digitSum = 0;

            for (let char of serialNumber) {
                digitSum += parseInt(char);
            }

            let isDivisibleBy9 = digitSum % 9 === 0;
            let isPalindrome = serialNumber === reversedSerial;

            let prize;

            if (isDivisibleBy9) {
                if (isPalindrome) {
                    prize = "Giải đặc biệt";
                }
                else {
                    prize = "Giải nhì";
                }
            }
            else {
                prize = "Không trúng thưởng";
            }
            console.log("MÃ VÉ CỔNG MAY MẮN");
            console.log("Mã số gốc: ", serialNumber);
            console.log("Mã đảo ngược: ", reversedSerial);
            console.log("Tổng chữ số: ", digitSum);
            console.log("Chia hết cho 9: ", isDivisibleBy9 ? "Có" : "Không");
            console.log("Giải thưởng: ", prize);

            break;
        default:
            break;
    

        }
}while (choice !== 0)
