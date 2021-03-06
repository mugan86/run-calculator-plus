export class RunConverter
{
    /**
     * @param speed_km_h : Add value in kilometers / hour. For Example: 14.5
     * @return String, result example '14.5 km/h = 04:08 min/km'
     */

    KilometersPerHourToPaceMinKm(speed_km_h: number) {
        //Get pace minutes and seconds
        let min_sc_km:number = 60 / speed_km_h;

        //Convert String
        let result_str:string = String(min_sc_km);

        //Get decimal value
        let index: number = result_str.indexOf(".");

        //Get only pace minutes

        let min_pace: number = min_sc_km;
        if (index != -1)  min_pace = this.RemoveDecimalValue(min_sc_km);

        //Get only pace seconds
        let sec_pace: number = 0;
        if (index != -1) sec_pace = this.RemoveDecimalValue((parseFloat("0" + result_str.substring(index)))*60);

        return this.GetPaceMinKMInCorrectFormat(min_pace, sec_pace);
    }

    /**
     *
     * @param min_pace int value (minutes)
     * @param sec_pace int value (seconds)
     * @return String, result example '04:17 min/km = 14.007782 km/h'
     */
    PaceMinKmToKilometersPerHour(min_pace: number, sec_pace:number) {
        /*if (sec_pace >= 60) return String.
                format("Seconds only 0-59 range (Not correct data input: %d minutes - %d seconds", min_pace, sec_pace);*/

        //Obtain total time with decimals (min and seconds)
        let total_time: number = (sec_pace / 60) + min_pace;

        let km_h:number = 60 / total_time;

        return String((Math.round(km_h * 100))/100);
    }

    /**
     * @param speed_m_min meters for min
     * @return String, result example '241.9 m/min = 14.514 km/h'
     */
    MetersMinuteToKilometersPerHour(speed_m_min: number) {
        if (speed_m_min <= 0) return "Stop situation";

        return this.GetDoubleValue(String((speed_m_min*60) / 1000), 2);
    }

    /**
     * @param speed_km_h Add value in kilometers / hour. For Example: 14.5
     * @return String, result example '14.514 km/h = 241.9 m/min'
     */
    KilometersPerHourToMetersMinute(speed_km_h: number) {
        if (speed_km_h <= 0) return "Stop situation";
        return this.GetDoubleValue(String(((speed_km_h/60)*1000)), 2);
    }

    /**
     * @param speed_m_sec meters for second
     * @return String, result example '4.0316 m/sec = 14.514 km/h'
     */
    MetersSecondToKilometersPerHour(speed_m_sec: number) {

        return this.MetersMinuteToKilometersPerHour(speed_m_sec * 60);
    }

    /**
     * @param speed_km_h Add value in kilometers / hour. For Example: 14.5
     * @return String, result example '14.514 km/h = 4.0316 m/sec '
     */
    KilometersPerHourToMetersSecond(speed_km_h: number) {
        let result_with_m_min = this.KilometersPerHourToMetersMinute(speed_km_h);

        return this.GetDoubleValue(String((parseFloat(result_with_m_min.replace(",", ".").trim())) / 60), 2);
    }

    /**
     * @param time HH:MM:SS formatAdd value in kilometers / hour. For Example: 01:00:00
     * @param km   double value to asign total kms to convert. For Example: 14.0
     * @return String with pace min/km, result example '01:00:00 / 15km = 04:00min/km'
     */
    TimeAndKilometersToPacePerKm(time: string, km: number) {

        //Get total time to complete km in seconds
        let time_complete_km_in_seconds: number = this.GetTimeInSecondsFromTime(time)/km;

        //Apply rint
        time_complete_km_in_seconds=Math.round(time_complete_km_in_seconds);

        //Get min
        let min_pace: number = time_complete_km_in_seconds / 60;

        //Get seconds to pace per km
        let sec_pace = time_complete_km_in_seconds % 60;

        //Return with pretty format
        return this.GetPaceMinKMInCorrectFormat(min_pace, sec_pace);
    }

    /**
     * @param time        HH:MM:SS formatAdd value in kilometers / hour. For Example: 01:00:00
     * @param pace_min_km MM:SS String value with pace per km. For Example: 04:00 min/km
     * @return String with pace min/km, result example '01:00:00 / 04:00min/km = 15km'
     */
    TimeAndPacePerKmToTotalKilometers(time: string, pace_min_km:string) {

        //Denbora totala segundutan lortzeko
        let sgTotalak=this.GetTimeInSecondsFromTime(time);

        //Get one km complete in seconds
        let sgKm:number=this. GetTimeInSecondsFromPacePerKm(pace_min_km);

        //Denbora zehatz batean egin ditugun km kopurua emango da
        let kilometers: number= sgTotalak/sgKm;

        return this.GetDoubleValue(String(Math.round(kilometers*1000)/1000), 2);
    }

    /**
     * @param km          double value to asign total kms to convert. For Example: 14.0
     * @param pace_min_km MM:SS String value with pace per km. For Example: 04:00 min/km
     * @return String with pace min/km, result example '15km / 04:00min/km = 01:00:00'
     */
    TotalKilometersAndPacePerKmToTime(km: number, pace_min_km: string) {

        //total seconds to complete one kilometer (from pace per km)
        let sgKm = this.GetTimeInSecondsFromPacePerKm(pace_min_km);

        //Total time to complete x km in x min per km
        let total_time_in_seconds = sgKm * km;

        //Convert total seconds in time format
        let hours = total_time_in_seconds / 3600;
        let minutes = (total_time_in_seconds % 3600) / 60;
        let seconds = total_time_in_seconds % 60;
        return this.GetWithTwoDigits(hours) + ":" +
                this.GetWithTwoDigits(minutes) + ":"+
                this.GetWithTwoDigits(seconds);
    }

    /**
     * @param time        HH:MM:SS formatAdd value For Example: 01:00:00
     * @param total_steps int value. For Example: 12304.
     * @return String with pace min/km, result example 'x step/min'
     */
    StepsPerMinuteFromTotalStepsAndTime(time: string, total_steps: number) {
        /******
         * 14500 steps in 1h18min00sg (4680seconds)
         * x steps in minute (60 seconds)
         *
         * x = (14500 * 60) / 4680 = 185,89 step / min
         */
        return this.GetDoubleValue(14500 * 60 /this.GetTimeInSecondsFromTime(time), 2);
    }

    /**
     * @param km          double value to asign total kms to convert. For Example: 14.0
     * @param total_steps int value. For Example: 12304.
     * @return String with pace min/km, result example '15km / 04:00min/km = 01:00:00'
     */
    StepsPerKmFromTotalStepsAndDistanceKm(km: number, total_steps) {
        return String(parseInt(total_steps) / km);
    }

    /**
     * @param distance double value to asign total kms to convert. For Example: If value > 5 considerer input meters
     * @return String with vO2max, result example '3850 (metres)-> VO2 max = 74 To calculate: (meters - 504) / 45
     */
    VO2MaxInCooperTest(distance) {

        if (distance < 1000) /*Distance in kmeters*/ distance = this.GetDistanceinMeters(distance);

        return this.GetDoubleValue(String((distance - 504) / 45), 3);
    }

    /**
     * @param v02   double value to asign vO2max that use to calculate distance to complete to obtain this vO2 max.
     *              For Example: 74 (VO2max) = 3850 m in 12 minutes.
     * @param in_km To return value in kilometers instead of meters (default)
     * @return String with distance in meters or km (boolean specific)
     */
    DistanceNeedToObtainSpecificVO2MaxWithCooperTest(v02:number, in_km: boolean) {
        if (!in_km) return String((v02*45) + 504);
        return String(this.GetDoubleValue((this.GetDistanceInKms((v02*45) + 504)), 3));
    }

    /**
     * @param percent : Percent to calculate FC range min value to FC zone (for example 50 = Z1)
     *                Z1: 50-60
     *                Z2: 60-70
     *                Z3: 70-80
     *                Z4: 80-90
     *                Z5: 90-100
     * @param low_fc  min ppm
     * @param max_fc  max ppm
     * @return Obtain select percent zone ppm range
     */
    ObtainFCZoneWithPercent(percent:number, low_fc, max_fc) {

        let zone: string = "Zone " + ((percent - 50) / 10 + 1) + ": ";
        low_fc = parseInt(low_fc);
        max_fc = parseInt(max_fc);
        return zone + (((max_fc-low_fc) * (percent)/100) + low_fc) + " - " + (((max_fc-low_fc) * (percent+10) / 100) + low_fc);
    }

    /**
     * @param low_fc min ppm
     * @param max_fc max ppm
     * @return FC zones with PPM range
     */
    ObtainResumeOfFCZones(low_fc, max_fc) {
        low_fc = parseInt(low_fc);
        max_fc = parseInt(max_fc);
        let fc_data = new Array<String>();
        for (let i = 50; i <= 90; i = i+10)
        {
            fc_data.push(this.ObtainFCZoneWithPercent(i, low_fc, max_fc));
        }
        return fc_data;
    }

    /**
     * @param feets Feets to convert to metres
     * @return Meters
     */
    ConvertFeetsToMeters(feets) {
        feets = parseInt(feets);
        return String(feets/3.28084);
    }

    /**
     * @param meters meters to convert to feets
     * @return Feets
     */
    ConvertMetersToFeets(meters) {
        meters = parseInt(meters);
        return String(meters*3.28084);
    }

     /**
     * @param miles Miles to convert to metres
     * @return Meters
     */
    ConvertMilesToMeters(miles) {
        miles = parseFloat(miles);
        return String(miles/0.000621371);
    }

    /**
     * @param meters meters to convert to miles
     * @return Miles
     */
    ConvertMetersToMiles(meters) {
        meters = parseFloat(meters);
        return String(meters*0.000621371);
    }

    /**
     * @param yards Yards to convert to metres
     * @return Meters
     */
    ConvertYardsToMeters(yards) {
        return String(parseInt(yards)/1.0936133333333);
    }

    /**
     * @param meters Meters to convert to yards
     * @return Yards
     */
    ConvertMetersToYards(meters: number) {
        return String(meters*1.0936133333333);
    }

    /**
     * @param value to remove decimals (if exist)
     * @return Int value
     */
    RemoveDecimalValue(value)
    {
        let index: number = String(value).indexOf(".");

        if (index == -1) return parseInt(value);
        return parseInt(String(value).substring(0, index));
    }

     /**
     * @param sec_pace Pace per km seconds value
     * @param min_pace Pace per km minutes value
     * @return Correct format to show pace per km, f.e: 04:07
     */
    GetPaceMinKMInCorrectFormat(min_pace, sec_pace)
    {
        sec_pace = parseInt(sec_pace);
        min_pace = parseInt(min_pace);
        //Add format to result depending minutes and seconds pace
        if (sec_pace<10 && min_pace < 10) return "0" + min_pace + ":0" + sec_pace;
        else if (sec_pace>=10 && min_pace<10) return "0" + min_pace + ":" +sec_pace;
        else if (sec_pace<10 && min_pace>=10) return min_pace + ":0" +sec_pace;
        else return min_pace + ":" +sec_pace;
    }

    /**
    * @param time: Time total in seconds, use to convert to time HH:MM:SS format
    * @return Return total seconds in time format. 3600seconds = 01:00:00
    */
    GetTimeInSecondsFromTime(time:string)
    {

        let parts = time.split(":");
        let hour = parts[0]; // 004
        let min = parts[1]; // 034556
        let sec = parts[2]; // 034556

        //Total time (in seconds) = (3600*hour) + (60*min) + sec
        return (3600 * parseInt(hour)) + (60 * parseInt(min)) + parseInt(sec);
    }

    /**
    * @param pace_per_km: Time total in seconds to complete one kilometer
    * @return Return total seconds to use in one km in min/km format. 240 seconds = 04:00
    */
    GetTimeInSecondsFromPacePerKm(pace_per_km:string)
    {
        console.log(pace_per_km);
        let parts = pace_per_km.split(":");
        let min = parts[0]; // 034556
        let sec = parts[1]; // 034556

        console.warn("MIN: " + min + " / SEC: " + sec);

        //Total time (in seconds) = (3600*hour) + (60*min) + sec
        return (60 * parseInt(min)) + parseInt(sec);
    }

    /**
    * Get Climb Percentage (%)
    * @param distance: Distance in select format (specific in distType)
    * @param Climb: Climb Metres (or descent, pass "-" value)
    * @param distType: Distance unit (m, mile, km,...)
    * @return Climb / Descent percentage
    * vertical distance (m) · 100/horizontal distance = climb%
    */
    GetClimbPercentage(distance, Climb, distType)
    {
        if (distType != 1) //Not metres
        {
            if (distType == 2) distance = this.GetDistanceinMeters(distance);
        }
        return this.GetDoubleValue(Climb * 100 / distance, 2);
    }

    /**
    * Get Climb Meters per km
    * @param distance: Distance total in select format (specific in distType)
    * @param Climb: Climb Metres total (or descent, pass "-" value)
    * @param distType: Distance unit (m, mile, km,...)
    * @return Climb m+ per km 
    */
    GetClimbMetersPerKm(distance, Climb, distType)
    {
        if (distType != 2) //Not metres
        {
            if (distType == 1) distance = this.GetDistanceInKms(distance);
        }
        return this.GetDoubleValue(Climb / distance, 2);
    }

    /**
    * Round value with specific decimals
    * @param pace_per_km: Time total in seconds to complete one kilometer
    * @param pace_per_km: Time total in seconds to complete one kilometer
    * @return Return result with select digit total. For example result 182.3453 with digit = 2 => 182.34
    */
    private GetDoubleValue(value,digit){
        let number:number;
        if(value==null) number=0;
        else number = value;
        return (Math.round(number * 100) / 100).toFixed(digit);
    }

    /**
    * Convert distance in kms to meters
    * @param distance: Distance in kilometers
    * @return Distance in meters. 1km = 1000m
    */
    private GetDistanceinMeters(distance)
    {
        return +distance * 1000;
    }

    /**
    * Convert distance in meters from kms
    * @param distance: Distance in metres
    * @return Distance in kms. 1000m = 1km
    */
    private GetDistanceInKms(meters)
    {
        return +meters / 1000;
    }


     /**
    * Convert distance in kms to meters
    * @param distance: Distance in kilometers
    * @return Distance in meters. 1Mile = 1609.3399metres
    */
    private GetDistanceMilesinMeters(distance)
    {
        return +distance * 1609.3399;
    }

    /**
    * Convert distance in miles from mts
    * @param distance: Distance in metres
    * @return Distance in kms. 1609.3399 metres = 1mile
    */
    private GetDistanceInMiles(meters)
    {
        return +meters / 1609.3399;
    }


    /**
    *
    * @param number: Number to use to return with two digits
    * @return Value in string format with 2 chars length. 9 = "09"
    */
    private GetWithTwoDigits(value: number)
    {
        //Remove all decimals before than asign correct format
        value = this.RemoveDecimalValue(value);
        if (value < 10) return "0"+value;
        return String(value);
    }
}
